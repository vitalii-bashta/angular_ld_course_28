import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from 'src/app/models';

@Component({
	selector: 'shop-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
	@Input() cartItem: Product;
	@Output() removeClicked: EventEmitter<Product> = new EventEmitter<Product>();

	onRemoveButtonClick(): void {
		this.removeClicked.emit(this.cartItem);
	}
}
