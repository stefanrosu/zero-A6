import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  genders = ['male', 'female'];
  constructor(private http: Http) {

  }
  ngOnInit() {
    this.profileForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'gender': new FormControl(null),
      'age': new FormControl(null),
      'hobby': new FormControl(null),
    });
  }
  onProfile() {
    console.log(this.profileForm.value);
    const Name = this.profileForm.value.name;
    const Surname = this.profileForm.value.surname;
    const Gender = this.profileForm.value.gender;
    const Age = this.profileForm.value.age;
    const Hobby = this.profileForm.value.hobby;
    const Data =
      [{
        name: Name,
        surname: Surname,
        gender: Gender,
        age: Age,
        hobby: Hobby
      }];
    this.http.post('https://zero-bd2ea.firebaseio.com/profile.json', Data).subscribe(response => {
      alert('Your data is saved!'), this.profileForm.reset(), error => { alert('Something is wrong!') }
    });

  }
}
