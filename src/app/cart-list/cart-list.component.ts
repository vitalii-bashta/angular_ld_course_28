import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { scan } from 'rxjs/operators';

import { Product } from '../models';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'shop-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
	cartProducts: Product[];
	cartProductsTotalPrice$: Observable<number>;

	private cartProducts$: Observable<Product[]>;
	private cartProductsSubscription = Subscription.EMPTY;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.cartProducts$ = this.cartService.getCartProductListStream();
		this.cartProductsSubscription = this.cartProducts$
			.subscribe((products: Product[]) => {
				this.cartProducts = products
			})
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

	ngOnDestroy(): void {
		this.cartProductsSubscription.unsubscribe()
	}
}
