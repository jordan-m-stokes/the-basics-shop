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

		window.scrollTo({
			top: gallery_elm.getBoundingClientRect().y,
			behavior: 'smooth'
		});
	}
}
