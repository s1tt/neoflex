import { RouteProps } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavoritesPage from '../pages/FavoritesPage';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  CART = 'cart',
  FAVORITES = 'favorites',
  CONTACTS = 'contacts',
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.FAVORITES]: '/favorites',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.NOT_FOUND]: '*'
};

export const pages: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.CART]: { path: RoutePath.cart, element: <CartPage /> },
  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritesPage />
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />
  }
};
