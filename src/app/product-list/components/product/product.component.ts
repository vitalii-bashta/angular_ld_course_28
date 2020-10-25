import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models';

@Component({
	selector: 'shop-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
	@Input() productInfo: Product;
	@Output() productBought: EventEmitter<Product> = new EventEmitter<Product>();

	constructor() { }

	ngOnInit() {
	}

	onBuy(): void {
		console.log(`You have bought ${this.productInfo.name}`);
		this.productBought.emit(this.productInfo);
	}
}
