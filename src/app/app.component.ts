import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Zero";
  constructor() { }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCmVIHJvBghfgfzJRTNrvjeuizSqO9__3I",
      authDomain: "zero-bd2ea.firebaseapp.com"
    });
  }
}