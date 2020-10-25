import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product-list/models';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'shop-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
	cartProductsTotalPrice$: Observable<number>;
	cartProductsAmount$: Observable<number>;
	cartEmpty$: Observable<boolean>;
	cartProducts$: Observable<Product[]>;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.cartProductsTotalPrice$ = this.cartService.getCartProductsTotalPriceStream();
		this.cartProductsAmount$ = this.cartService.getCartProductsAmountStream();
		this.cartProducts$ = this.cartService.getCartProductListStream();
		this.cartEmpty$ = this.cartService.getCartEmptyStream();
	}

	onClearCartClick(): void {
		this.cartService.clearProductCart();
	}

	onProductDeleted(ev: Product): void {
		this.cartService.removeProductFromCart(ev);
	}

	onItemAdded(ev: Product): void {
		this.cartService.increaseProductAmount(ev, 1);
	}

	onItemRemoved(ev: Product): void {
		this.cartService.decreaseProductAmount(ev, 1);
	}
}
