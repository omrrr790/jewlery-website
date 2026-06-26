export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  formattedPrice: string;
  rating: number;
  reviews: number;
  badge: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
  itemCount: number;
}