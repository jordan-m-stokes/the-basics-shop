import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import { Http } from "@angular/http";
import { Product } from "./product.model";

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(				  private http: 	Http,
				@Inject(DOCUMENT) private document: Document ) {}

	getProducts(): Promise<Product[]>
	{
		return this.http.get('http://localhost:3000/products.json')
						.toPromise()
						.then(response => response.json() as Product[]);
	}

	public updateColumnLayout(): void
	{
		const feed = document.querySelector('.products');
		const spacePerCard = 315;
		const feedWidth = feed.clientWidth;
		let   totalColumns = Math.floor(feedWidth / spacePerCard * .95);
		let   columns = Array.from(document.querySelectorAll('.column'));

		if (totalColumns === columns.length)
		{
			return;
		}

		let cards = Array.from(feed.querySelectorAll('.card'));

		if (feedWidth < 1001 || totalColumns < 1) totalColumns = 1

		if (columns.length > 0) 
		{
			columns.forEach(column => {
				column.parentNode.removeChild(column);
			});
			cards.sort((a, b) => 
			{
				let i_a = parseInt(a.id.split('card-')[1]);
				let i_b = parseInt(b.id.split('card-')[1]);

				return i_a - i_b;
			});
		}
		else
		{
			for(let i in cards)
			{
				cards[i].id = `card-${i}`;
			}
		}

		columns = [];

		for (let i = 0; i < totalColumns; i++) 
		{
			const column = document.createElement('div');

			column.className = 'column';
			column.style.display = 'inline-block';
			column.style.verticalAlign = 'top';
			column.style.width = `${spacePerCard}px`;

			columns.push(column);
		}

		columns.forEach(column => 
		{
			feed.appendChild(column);
		});

		for (let i = 0; i < cards.length; i++) 
		{
			cards[i].parentNode.removeChild(cards[i]);
			columns[i % totalColumns].appendChild(cards[i]);
		}

	}
}