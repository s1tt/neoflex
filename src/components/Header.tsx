import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useFavorite } from '../hooks/useFavorite';
import { RoutePath } from '../utils/pages';
import Logo from './Logo';

const Header = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const { cart } = useCart();
  const { likedProducts } = useFavorite();

  useEffect(() => {
    setTotalProducts(
      cart.reduce((acc, productInCart) => acc + productInCart.count, 0)
    );
  }, [cart]);
  return (
    <header className='flex justify-between items-center mb-9'>
      <Logo />
      <div className='flex items-center gap-[10px]'>
        <Link
          to={RoutePath.favorites}
          className='p-[20px] relative cursor-pointer hover:opacity-70 transition-opacity'
        >
          <img
            src='/src/assets/FavoritesIcon.svg'
            alt='Favorites'
            className='w-[23px] h-[23px]'
          />
          {likedProducts.length > 0 && (
            <span className='absolute rounded-full bg-secondColor w-[18px] h-[18px] flex justify-center items-center text-[#fff] text-m top-3 right-3'>
              {likedProducts.length}
            </span>
          )}
        </Link>
        <Link
          className='p-[20px] relative cursor-pointer hover:opacity-70 transition-opacity'
          to={RoutePath.cart}
        >
          <img
            src='/src/assets/CartIcon.svg'
            alt='Cart'
            className='w-[23px] h-[23px]'
          />
          {totalProducts > 0 && (
            <span className='absolute rounded-full bg-secondColor w-[18px] h-[18px] flex justify-center items-center text-[#fff] text-m top-3 right-3 hover:opacity-100'>
              {totalProducts}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
