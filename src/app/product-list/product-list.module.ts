import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products.service';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ProductListComponent, ProductComponent],
	providers: [ProductsService],
	exports: [ProductListComponent]
})
export class ProductListModule { }
