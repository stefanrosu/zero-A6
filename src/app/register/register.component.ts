import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email_register': new FormControl(null),
      'password_register': new FormControl(null),
    });
  }
  onRegister() {
    // console.log(this.registerForm.value);
    const email = this.registerForm.value.email_register;
    const password = this.registerForm.value.password_register;
    //sent data to firebase from register form
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/login']);
      }
    ).catch(
     error => console.log(error)
    )
  }
}
