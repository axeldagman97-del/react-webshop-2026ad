import { createContext, useContext } from 'react';

export const CartContext = createContext(); //Skapar kontexten, (global kundvagnslåda)

export const useCart = () => {
  const { cart, addToCart } = useContext(CartContext);
  return { cart, addToCart };
};
