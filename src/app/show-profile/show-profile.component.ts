import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  showData = [{
    name: 'Andreea',
    surname: 'Alupoaei',
    gender: 'feminin',
    age: 23,
    hobby: 'Books'
  }];

  constructor(private http: Http, private profileService: ProfileService) { }
  ngOnInit() {
  }
  getData() {
    this.profileService.getServers().subscribe(
      (servers: any[]) => {
        console.log(servers);
      }, error => {
        alert('Error')
      });
  }
}
