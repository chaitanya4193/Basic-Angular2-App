import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { IAddress } from './user.interface.IAddress';
import { IPost } from './user.interface.IPosts';

@Component({
	moduleId: module.id,
	selector:`user`,
	templateUrl:`user.component.html`,
	providers: [PostsService]
})

export class UserComponent{
	name : string;
	emailId : string;
	address : IAddress;
	hobbies : string[];
	showHobbies : boolean;
	posts : IPost[]

	constructor(private postsService : PostsService){
		this.name = 'Chaitanya Naik';
		this.emailId = 'chaitanya4193@gmail.com';
		this.address = {
			streetName : 'Janapriya Nivas',
			city : 'Bangalore',
			state: 'Karnataka'
		}
		this.hobbies = ['Movies', 'Music', 'Gaming', 'Coding'];
		this.showHobbies = false;

		this.postsService.getPosts().subscribe(posts => {
			this.posts = posts;
		});

	}

	toggleHobbies(){
		this.showHobbies = !this.showHobbies;
	}

	addHobby(hobby:string){
		this.hobbies.push(hobby);
	}

	deleteHobby(index:number){
		this.hobbies.splice(index ,1);
	}
}
