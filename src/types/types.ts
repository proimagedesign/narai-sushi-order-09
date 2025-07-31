export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Order {
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  paymentMethod: 'dinheiro' | 'cartao-debito' | 'cartao-credito' | 'pix';
  deliveryType: 'entrega' | 'retirada';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}