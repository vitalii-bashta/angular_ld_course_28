import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CartListComponent } from './cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [CartListComponent, CartItemComponent],
	exports: [CartListComponent]
})
export class CartListModule { }
