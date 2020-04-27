import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model'; 


@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit
{
    products: Product[];

	constructor(private productService: ProductService) {}

	ngOnInit(): void
	{
		this.productService
            .getProducts()
            .then(products => this.products = products);
	}

}
