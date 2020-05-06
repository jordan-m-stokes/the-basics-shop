import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product/product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	@Input() product: Product;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {}

	@Input()
	set ready(isReady: boolean)
	{
		if(isReady) this.productService.updateColumnLayout();
	}

}
