import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

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
	}
}
