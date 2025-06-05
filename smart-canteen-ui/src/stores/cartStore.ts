import { create } from 'zustand';
import { CartItem, Dish } from '@/types';

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
  addItem: (dish: Dish, quantity?: number, notes?: string) => void;
  removeItem: (dishId: number) => void;
  updateQuantity: (dishId: number, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  items: [],
  totalAmount: 0,
  totalItems: 0,
  
  addItem: (dish: Dish, quantity = 1, notes) => {
    const { items } = get();
    const existingItem = items.find(item => item.dish.id === dish.id);
    
    let newItems: CartItem[];
    if (existingItem) {
      newItems = items.map(item =>
        item.dish.id === dish.id
          ? { ...item, quantity: item.quantity + quantity, notes: notes || item.notes }
          : item
      );
    } else {
      newItems = [...items, { dish, quantity, notes }];
    }
    
    set({ items: newItems });
    get().calculateTotals();
  },
  
  removeItem: (dishId: number) => {
    const { items } = get();
    const newItems = items.filter(item => item.dish.id !== dishId);
    set({ items: newItems });
    get().calculateTotals();
  },
  
  updateQuantity: (dishId: number, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(dishId);
      return;
    }
    
    const { items } = get();
    const newItems = items.map(item =>
      item.dish.id === dishId
        ? { ...item, quantity }
        : item
    );
    set({ items: newItems });
    get().calculateTotals();
  },
  
  clearCart: () => {
    set({ items: [], totalAmount: 0, totalItems: 0 });
  },
  
  calculateTotals: () => {
    const { items } = get();
    const totalAmount = items.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    set({ totalAmount, totalItems });
  },
})); 