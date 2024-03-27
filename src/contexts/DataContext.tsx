import { ReactNode, createContext, useEffect, useState } from 'react';
import { data } from '../mock/data.ts';
import { Product } from '../types/product';

interface DataContextProviderProps {
  children: ReactNode;
}

interface DataContextValue {
  products: Product[];
  wired: Product[];
  wireless: Product[];
  isLoading: boolean;
}

export const DataContext = createContext<DataContextValue | undefined>(
  undefined
);

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wired, setWired] = useState<Product[]>([]);
  const [wireless, setWireless] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(data as Product[]);
      setWired(data.filter(product => product.type === 'wired') as Product[]);
      setWireless(
        data.filter(product => product.type === 'wireless') as Product[]
      );
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DataContext.Provider value={{ products, wired, wireless, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
