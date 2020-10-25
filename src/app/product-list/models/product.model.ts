export interface Product {
	name: string;
	description: string;
	price: number;
	category: ProductCategory;
	isAvailable: boolean;
	id: string;
	amountInCart?: number
}

export type ProductCategory = 'healthcare' | 'electronics' | 'clothing';
