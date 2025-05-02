import React, { createContext, ReactNode, useContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  items: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  getTotal: () => number;
  setAddress: (address: string) => void;
  address: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const [address, setAddressState] = useState<string>("");

  const updateQuantity = (id: string, quantity: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const setAddress = (address: string) => {
    setAddressState(address);
  };

  return (
    <CartContext.Provider
      value={{ items, updateQuantity, getTotal, setAddress, address }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
