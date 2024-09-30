import { ReactNode } from "react";

export interface Product {
  _id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  images: string[];
  isOnPromotion: boolean;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  clearCart: () => void;
  removeFromCart: (product: CartProduct) => void;
  removeItemFromCart: (product: CartProduct) => void;
}

export interface ProviderProps {
  children: ReactNode;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartProduct }
  | { type: "REMOVE_FROM_CART"; payload: CartProduct }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: CartProduct }
  | { type: "CLEAR_CART"; payload? };

export interface FiltersType {
  category: string;
  searched: string;
}

//TYPES filter context

export interface FiltersContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  filterProducts: (producto: Producto[]) => Producto[];
}
