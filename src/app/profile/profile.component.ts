import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  genders = ['male','female'];
  constructor() {

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
  onProfile(){
    console.log(this.profileForm.value);
  }
}
