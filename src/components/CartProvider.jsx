import React, { useState } from 'react';
import { CartContext } from '../context/CartContext';

//Skapar en smart provider som hanterar all kundvagnslogik
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //Funktion för att lägga till i kundvagnagnen
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    console.log('produkten tillagd', product.title);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
