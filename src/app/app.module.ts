import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
		CartListModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
