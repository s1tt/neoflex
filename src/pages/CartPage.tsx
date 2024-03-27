import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SecondCard from '../components/SecondCard';
import PaymentModal from '../components/modals/PaymentModal';
import { useCart } from '../hooks/useCart';
import { useModal } from '../hooks/useModal';
import { formatPrice } from '../utils/formatPrice';

const CartPage = () => {
  const {
    cart,
    addOnePieceToCart,
    removeProductFromCart,
    removeOnePieceFromCart
  } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const { setShowModalTrue } = useModal();
  const { t } = useTranslation();

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, productInCart) => acc + productInCart.price * productInCart.count,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [cart]);
  return (
    <section className='mb-5'>
      <h2 className='text-mainColor text-xl font-semibold mb-[13px]'>
        {t('Корзина')}
      </h2>
      <div className='flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-4'>
        <div>
          {cart.length ? (
            <ul className='flex flex-col gap-5'>
              {cart.map(productInCart => (
                <li key={productInCart.id}>
                  <SecondCard
                    product={productInCart}
                    addOnePieceToCart={addOnePieceToCart}
                    removeProductFromCart={removeProductFromCart}
                    removeOnePieceFromCart={removeOnePieceFromCart}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <h3>{t('Корзина пуста')}</h3>
          )}
        </div>
        <div className='max-w-[320px] w-full'>
          <div className='bg-[#fff] rounded-[30px] px-[21px] pt-[21px] pb-[74px] relative'>
            <div className='flex justify-between'>
              <span className='uppercase font-semibold text-m'>
                {t('Итого')}
              </span>
              <span className='uppercase font-semibold text-m'>
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              className='absolute w-full bottom-0 left-0 px-[14px] py-[22px] bg-mainColor rounded-[20px] text-[#fff] text-l hover:opacity-90 transition-opacity'
              onClick={() => setShowModalTrue(<PaymentModal />)}
              disabled={cart.length === 0}
            >
              {t('Перейти к оформлению')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
