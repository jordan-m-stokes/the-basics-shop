import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'the-basics-shop';

	constructor() {}

	public click(event)
	{
		const className = event.target.className;

		if(className.includes("down-to-gallery"))
		{
			const gallery_elm = document.querySelector('#gallery')
	
			window.scrollTo({
				top: gallery_elm.getBoundingClientRect().y + window.scrollY - 50,
				behavior: 'smooth'
			});
		}
		else if(className.includes("up-to-top"))
		{
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
}
