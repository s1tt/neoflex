import { ReactNode, createContext, useState } from 'react';
import { Product } from '../types/product';
import { LOCAL_FAVORITES } from '../utils/constants';

interface LikedContextProviderProps {
  children: ReactNode;
}

interface LikedContextValue {
  likedProducts: Product[];
  likeProduct: (product: Product) => void;
  unlikeProduct: (productId: number) => void;
  isLikedProduct: (productId: number) => boolean;
}

export const LikedContext = createContext<LikedContextValue | undefined>(
  undefined
);

const initialCart = JSON.parse(localStorage.getItem(LOCAL_FAVORITES) ?? '[]');

export const LikedContextProvider = ({
  children
}: LikedContextProviderProps) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>(initialCart);

  const likeProduct = (product: Product) => {
    const newLikedProducts = [...likedProducts, product];
    setLikedProducts(newLikedProducts);
    localStorage.setItem(LOCAL_FAVORITES, JSON.stringify(newLikedProducts));
  };

  const unlikeProduct = (productId: number) => {
    const newLikedProducts = likedProducts.filter(
      product => product.id !== productId
    );
    setLikedProducts(newLikedProducts);
    localStorage.setItem(LOCAL_FAVORITES, JSON.stringify(newLikedProducts));
  };

  const isLikedProduct = (productId: number) => {
    return likedProducts.some(product => product.id === productId);
  };

  return (
    <LikedContext.Provider
      value={{ likedProducts, likeProduct, unlikeProduct, isLikedProduct }}
    >
      {children}
    </LikedContext.Provider>
  );
};
