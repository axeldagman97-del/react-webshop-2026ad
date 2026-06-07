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

  //Minus-logik
  const removeFromCart = (productId) => {
    setCart((prev) => {
      const targetItem = prev.find((item) => item.id === productId);

      if (targetItem?.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }

      //annars minska antalet med 1
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  //Central Matematik för Cart - håller totalpris och kvantitet.
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  const roundedPrice = totalPrice.toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, roundedPrice }}>
      {children}
    </CartContext.Provider>
  );
}
