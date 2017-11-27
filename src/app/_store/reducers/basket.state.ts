import { Product } from '../../product.model';

export interface AppState {
  basket: BasketState;
}
export interface BasketState {
  items: Product[];
}
