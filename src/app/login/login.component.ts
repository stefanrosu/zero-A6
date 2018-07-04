import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email_login': new FormControl(null, Validators.required),
      'password_login': new FormControl(null,Validators.required)
    });
  }
  onLogin() {
    // console.log(this.loginForm.value)
    const email = this.loginForm.value.email_login;
    const password = this.loginForm.value.password_login;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/profile']);
      }
    ).catch(error => alert('Please enter a valid data!'))
  }

}
