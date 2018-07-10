import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService implements OnInit {
	constructor(private http: Http) {

	}
	ngOnInit() {

	}
	getServers() {
		return this.http.get('https://zero-bd2ea.firebaseio.com/profile.json').pipe(map((response: Response) => {
			const data = response.json();
			return data;
		}));
	}
}