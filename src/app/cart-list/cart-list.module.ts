import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CartListComponent } from './cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
	imports: [
		CommonModule,

		SharedModule
	],
	declarations: [CartListComponent, CartItemComponent],
	exports: [CartListComponent]
})
export class CartListModule { }
