import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit
{

  constructor() {}

  ngOnInit(): void {}

  public click(event)
	{
		const className = event.target.className;

		if(className.includes("up-to-top"))
		{
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
}
