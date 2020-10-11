import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from '../../models';
import { productsMockData } from '../products-mock-data';

@Injectable()
export class ProductsService {
	private productsMockData$: Observable<Product[]> = of(productsMockData);

	getProducts(): Observable<Product[]> {
		return this.productsMockData$;
	}
}
