import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Product } from '../models';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'shop-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
	cartProducts$: Observable<Product[]>;
	cartProductsTotalPrice$: Observable<number>;

	constructor(private cartService: CartService) { }

	ngOnInit() {
		this.cartProducts$ = this.cartService.getCartProductListStream();
		this.cartProductsTotalPrice$ = this.cartProducts$
			.pipe(
				scan((accumulator, currentValue: Product[]) => {
					return currentValue.length ? accumulator + this.getProductsTotalPrice(currentValue) : 0;
				}, 0)
			);
	}

	onClearCartClick(): void {
		this.cartService.clearProductCart();
	}

	onRemoveClicked(ev: Product): void {
		this.cartService.removeProductFromCart(ev);
	}

	getProductsTotalPrice(products: Product[]): number {
		return products.reduce((accumulator, currentValue: Product) => {
			accumulator += currentValue.price;
			return accumulator;
		}, 0);
	}
}
