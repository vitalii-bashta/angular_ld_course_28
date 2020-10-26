import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Product } from '../product-list/models';

import { ProductsService } from './services/products.service';

@Component({
	selector: 'shop-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
	products: Product[];

	private productsSubscription: Subscription;

	constructor(
		private productsService: ProductsService,
		private cartService: CartService
	) { }

	ngOnInit() {
		// тут можно и не создавать подписку, воспользоваться async пайпом,
		// будем смотреть на следцующей встрече
		this.productsSubscription = this.productsService.getProducts()
			.subscribe((products: Product[]) => {
				this.products = products;
			});
	}

	onProductBought(product: Product): void {
		this.cartService.addProductToCart(product);
	}

	ngOnDestroy(): void {
		// if (this.productsSubscription) {
			this.productsSubscription?.unsubscribe();
		// }
	}
}
