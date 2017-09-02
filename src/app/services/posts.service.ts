import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const JSON_POSTS_URL:string = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable()
export class PostsService{
	constructor(private http : Http){
		console.log('Initializing PostsService constructor..');
	}

	getPosts(){
		return this.http.get(JSON_POSTS_URL)
		.map(res => res.json());
	}
}
