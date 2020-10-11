import { Product } from '../models';
import { CategoryOptions } from '../first/first.component';

export const productsMockData: Product[] = [
	{
		name: 'Iphone XS Max',
		description: 'One of the best phones out there',
		price: 1000,
		category: CategoryOptions.Electronics,
		isAvailable: true,
		id: '1'
	},
	{
		name: 'Iphone XS Max',
		description: 'One of the best phones out there',
		price: 980,
		category: CategoryOptions.Electronics,
		isAvailable: true,
		id: '2'
	},
	{
		name: 'Iphone 12',
		description: 'Overpriced piece of junk',
		price: 1500,
		category: CategoryOptions.Electronics,
		isAvailable: false,
		id: '3'
	},
	{
		name: 'COVID-19 Vaccine',
		description: 'Coronavirus cure',
		price: 200,
		category: CategoryOptions.Healthcare,
		isAvailable: false,
		id: '4'
	},
	{
		name: 'NASA T-shirt',
		description: `Every developer's must-have`,
		price: 30,
		category: CategoryOptions.Clothing,
		isAvailable: true,
		id: '5'
	},
	{
		name: 'NASA T-shirt',
		description: `Every developer's must-have`,
		price: 30,
		category: CategoryOptions.Clothing,
		isAvailable: true,
		id: '6'
	}
];

export const initialCartProducts: Product[] = productsMockData.slice(1, 3);
