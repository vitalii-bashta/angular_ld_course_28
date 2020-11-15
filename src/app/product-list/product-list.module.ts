import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductsService } from './services/products.service';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [ProductListComponent, ProductComponent],
	providers: [ProductsService],
	exports: [ProductListComponent]
})
export class ProductListModule { }
