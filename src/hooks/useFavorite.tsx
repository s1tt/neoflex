import { useContext } from 'react';
import { LikedContext } from '../contexts/LikedContext';

export const useFavorite = () => {
  const context = useContext(LikedContext);

  if (!context) {
    throw new Error('useFavorite must be used within a LikedContextProvider');
  }

  return context;
};
