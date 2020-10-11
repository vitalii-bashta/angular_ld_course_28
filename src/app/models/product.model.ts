export interface Product {
	name: string;
	description: string;
	price: number;
	category: ProductCategory;
	isAvailable: boolean;
	id: string;
}

export type ProductCategory = 'healthcare' | 'electronics' | 'clothing';
