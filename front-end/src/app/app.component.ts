import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'the-basics-shop';

	constructor()
	{

	}

	public click(event)
	{
		const gallery_elm = document.querySelector('#gallery')
		console.log(gallery_elm.getBoundingClientRect().y);

		window.scrollTo({
			top: gallery_elm.getBoundingClientRect().y + window.scrollY - 50,
			behavior: 'smooth'
		});
	}
}
