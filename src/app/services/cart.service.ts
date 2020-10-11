import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models';
import { initialCartProducts } from '../product-list/products-mock-data';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private readonly productCart$: BehaviorSubject<Product[]> = new BehaviorSubject(initialCartProducts);

	getCartProductListStream(): Observable<Product[]> {
		return this.productCart$.asObservable();
	}

	addProductToCart(product: Product): void {
		const products = [...this.getProductCartValue(), product];
		this.setProductCart(products);
	}

	removeProductFromCart(product: Product): void {
		const products = this.getProductCartValue().filter(p => p.id !== product.id);
		this.setProductCart(products);
	}

	clearProductCart(): void {
		this.setProductCart([]);
	}

	private setProductCart(products: Product[]): void {
		this.productCart$.next(products);
	}

	private getProductCartValue(): Product[] {
		return this.productCart$.getValue();
	}
}
