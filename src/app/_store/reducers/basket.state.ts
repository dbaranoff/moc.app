import { Product } from '../../product.model';

export interface AppState {
	cart: CartState;
}
export interface CartState {
	items: Product[];
}