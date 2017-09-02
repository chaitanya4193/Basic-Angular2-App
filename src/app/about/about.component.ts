import { Component } from '@angular/core';

@Component({
	moduleId:module.id,
	selector: 'about',
	templateUrl:`about.component.html`
})
export class AboutComponent  {
	header:string;

	constructor(){
		this.header = 'About page of the app';
	}

}
