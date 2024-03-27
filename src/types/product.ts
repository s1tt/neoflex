export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  type: 'wired' | 'wireless';
  description: string;
}

export interface ProductInCart extends Product {
  count: number;
}
