import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

import { Product } from '../product-list/models';
import { initialCartProducts } from '../product-list/products-mock-data';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private readonly productCart$: BehaviorSubject<Product[]> = new BehaviorSubject([]);
	private readonly cartProductsTotalPrice$: BehaviorSubject<number> = new BehaviorSubject(null);
	private readonly cartProductsAmount$: BehaviorSubject<number> = new BehaviorSubject(null);
	private readonly cartEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);

	constructor() {
		this.addProductToCart(initialCartProducts[0]);
		this.addProductToCart(initialCartProducts[1]);
		this.updateCartData();
	}

	getCartProductListStream(): Observable<Product[]> {
		return this.productCart$.asObservable();
	}

	getCartProductsAmountStream(): Observable<number> {
		return this.cartProductsAmount$.asObservable();
	}

	getCartProductsTotalPriceStream(): Observable<number> {
		return this.cartProductsTotalPrice$.asObservable();
	}

	getCartEmptyStream(): Observable<boolean> {
		return this.cartEmpty$.asObservable();
	}

	addProductToCart(product: Product): void {
		const products: Product[] = this.getProductCartValue();
		const transformedProduct: Product = {
			...product,
			amountInCart: 1
		};
		const isProductInCart = Boolean(products.find((p) => p.id === product.id));

		if(isProductInCart) {
			this.increaseProductAmount(product, 1)
		} else {
			this.setProductCart([...products, transformedProduct]);
			this.updateCartData();
		}
	}

	increaseProductAmount(product: Product, amount: number): void {
		const products = this.getProductCartValue().map((p: Product) => {
			if(p.id === product.id) {
				let transformedProduct: Product;

				if(p.amountInCart) {
					transformedProduct = {
						...p,
						amountInCart: p.amountInCart + amount
					};
				} else {
					transformedProduct = {
						...p,
						amountInCart: amount
					};
				}
				return transformedProduct
			}
			return p
		});

		this.setProductCart(products);
		this.updateCartData();
	}

	decreaseProductAmount(product: Product, amount: number): void {
		const isRemoved = product.amountInCart <= 1;
		const products = this.getProductCartValue().map((p: Product) => {
			if(p.id === product.id) {
				let transformedProduct: Product;

				if(p.amountInCart > 1) {
					transformedProduct = {
						...p,
						amountInCart: p.amountInCart - amount
					};

					return transformedProduct;
				}
			}
			return p;
		});

		if(isRemoved) {
			this.removeProductFromCart(product)
		} else {
			this.setProductCart(products);
			this.updateCartData();
		}
	}

	removeProductFromCart(product: Product): void {
		const products = this.getProductCartValue().filter(p => p.id !== product.id);

		this.setProductCart(products);
		this.updateCartData();
	}

	clearProductCart(): void {
		this.setProductCart([]);
		this.updateCartData();
	}

	isCartEmpty(): boolean {
		return Boolean(this.getProductCartValue().length);
	}

	private setProductCart(products: Product[]): void {
		this.productCart$.next(products);
	}

	private getProductCartValue(): Product[] {
		return this.productCart$.getValue();
	}

	private getProductsPrice(products: Product[]): number {
		return products.reduce((accumulator, currentValue: Product) => {
			accumulator += (currentValue.price * currentValue.amountInCart);
			return accumulator;
		}, 0);
	}

	private getProductsAmount(products: Product[]): number {
		return products.reduce((accumulator: number, currentValue: Product) => {
			accumulator += currentValue.amountInCart;
			return accumulator;
		}, 0)
	}

	private updateCartData(): void {
		const currentCartData: Product[] = this.getProductCartValue();
		const currentTotalPrice: number = this.getProductsPrice(currentCartData);
		const currentProductsAmout: number = this.getProductsAmount(currentCartData);
		const isCartEmpty: boolean = Boolean(currentCartData.length);

		this.cartProductsTotalPrice$.next(currentTotalPrice);
		this.cartProductsAmount$.next(currentProductsAmout);
		this.cartEmpty$.next(isCartEmpty);
	}
}
