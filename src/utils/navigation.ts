import { AppRoutes, RoutePath } from './pages';
interface INavigation {
  name: string;
  href: string;
}

export const navigation: INavigation[] = [
  { name: 'Избранное', href: RoutePath[AppRoutes.FAVORITES] },
  { name: 'Корзина', href: RoutePath[AppRoutes.CART] },
  { name: 'Контакты', href: RoutePath[AppRoutes.CONTACTS] }
];
