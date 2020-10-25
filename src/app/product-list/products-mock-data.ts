import { Product } from '../product-list/models';

export const productsMockData: Product[] = [
	{
		name: 'Iphone XS Max',
		description: 'One of the best phones out there',
		price: 1000,
		category: 'electronics',
		isAvailable: true,
		id: '1'
	},
	{
		name: 'Iphone XS',
		description: 'One of the best phones out there',
		price: 980,
		category: 'electronics',
		isAvailable: true,
		id: '2'
	},
	{
		name: 'Iphone 12',
		description: 'Overpriced piece of junk',
		price: 1500,
		category: 'electronics',
		isAvailable: false,
		id: '3'
	},
	{
		name: 'COVID-19 Vaccine',
		description: 'Coronavirus cure',
		price: 200,
		category: 'healthcare',
		isAvailable: false,
		id: '4'
	},
	{
		name: 'NASA T-shirt',
		description: `Every developer's must-have`,
		price: 30,
		category: 'clothing',
		isAvailable: true,
		id: '5'
	},
	{
		name: 'NASA T-shirt',
		description: `Every developer's must-have`,
		price: 30,
		category: 'clothing',
		isAvailable: true,
		id: '6'
	}
];

export const initialCartProducts: Product[] = productsMockData.slice(1, 3);
