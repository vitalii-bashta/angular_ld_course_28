import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FirstModule } from './first/first.module';
import { ProductListModule } from './product-list/product-list.module';
import { CartListModule } from './cart-list/cart-list.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		FirstModule,
		ProductListModule,
		CartListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
