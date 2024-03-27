import { ReactNode, createContext, useEffect, useState } from 'react';
import { Product, ProductInCart } from '../types/product';
import { LOCAL_CART } from '../utils/constants';

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextValue {
  cart: ProductInCart[];
  addOnePieceToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  removeOnePieceFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

const initialCart = JSON.parse(localStorage.getItem(LOCAL_CART) ?? '[]');

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[] | []>(initialCart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addOnePieceToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].count =
        newCart[existingProductIndex].count + 1;
      setCart(newCart);
      localStorage.setItem(LOCAL_CART, JSON.stringify(newCart));
    } else {
      setCart(prev => [...prev, { ...product, count: 1 }]);
      localStorage.setItem(
        LOCAL_CART,
        JSON.stringify([...cart, { ...product, count: 1 }])
      );
    }
  };

  const removeOnePieceFromCart = (productId: number) => {
    const targetProduct = cart.findIndex(item => item.id === productId);

    const newCart = [...cart];
    newCart[targetProduct].count = newCart[targetProduct].count - 1;

    if (newCart[targetProduct].count) {
      setCart(newCart);
      localStorage.setItem(LOCAL_CART, JSON.stringify(newCart));
    } else {
      removeProductFromCart(productId);
    }
  };

  const removeProductFromCart = (productId: number) => {
    const newCart = cart.filter(product => product.id !== productId);
    setCart(newCart);
    localStorage.setItem(LOCAL_CART, JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem(LOCAL_CART, JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addOnePieceToCart,
        removeOnePieceFromCart,
        removeProductFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
