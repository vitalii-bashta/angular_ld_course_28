import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../product-list/models';

@Component({
	selector: 'shop-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
	@Input() cartItem: Product;
	@Output() productDeleted: EventEmitter<Product> = new EventEmitter<Product>();
	@Output() itemAdded: EventEmitter<Product> = new EventEmitter<Product>();
	@Output() itemRemoved: EventEmitter<Product> = new EventEmitter<Product>();

	onRemoveButtonClick(): void {
		this.productDeleted.emit(this.cartItem);
	}

	onAddItem(): void {
		this.itemAdded.emit(this.cartItem);
	}

	onRemoveItem(): void {
		this.itemRemoved.emit(this.cartItem);
	}
}
