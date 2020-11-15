import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { CartService } from '../services/cart.service';
import { Product } from '../product-list/models';

import { ProductsService } from './services/products.service';

@Component({
	selector: 'shop-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	products$: Observable<Product[]>;

	constructor(
		private productsService: ProductsService,
		private cartService: CartService
	) { }

	ngOnInit() {
		this.products$ = this.productsService.getProducts();
	}

	onProductBought(product: Product): void {
		this.cartService.addProductToCart(product);
	}
}
