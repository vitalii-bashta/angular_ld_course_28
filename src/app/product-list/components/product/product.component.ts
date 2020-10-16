import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models';

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

	// можно не передавать данные из шаблона, они тут есть в this.productInfo
	onBuy(product: Product): void {
		console.log(`You have bought ${product.name}`);
		this.productBought.emit(product);
	}
}
