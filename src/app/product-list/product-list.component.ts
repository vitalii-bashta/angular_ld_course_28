import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Product } from '../models';

import { ProductsService } from './services/products.service';

@Component({
	selector: 'shop-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
	products: Product[];

	private productsSubscription = Subscription.EMPTY;

	constructor(
		private productsService: ProductsService,
		private cartService: CartService
	) { }

	ngOnInit() {
		this.productsSubscription = this.productsService.getProducts()
			.subscribe((products: Product[]) => {
				this.products = products;
			});
	}

	onProductBought(ev: Product): void {
		this.cartService.addProductToCart(ev);
	}

	ngOnDestroy(): void {
		this.productsSubscription.unsubscribe();
	}
}
