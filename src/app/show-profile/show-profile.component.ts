import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  
  }
  onShow(){
    this.http.get('https://zero-bd2ea.firebaseio.com/profile.json').subscribe((response: Response)=>{
      const data = response.json();
    },error =>{alert('Error')}
  );
  }

}
