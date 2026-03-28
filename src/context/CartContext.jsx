import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === service.id || item.title === service.title);
      if (existingItem) {
        return prevCart.map(item => 
          (item.id === service.id || item.title === service.title) 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      return [...prevCart, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (titleToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.title !== titleToRemove));
  };

  // NEW: Function to increase or decrease quantity
  const updateQuantity = (title, amount) => {
    setCart((prevCart) => prevCart.map(item => {
      if (item.title === title) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const cleanPrice = parseInt(String(item.price).replace(/,/g, '').replace(/[^0-9]/g, '')) || 0;
      return total + (cleanPrice * item.quantity);
    }, 0);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);