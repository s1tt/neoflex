import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
interface ProductModalProps {
  product: Product;
}

const ProductModal = ({ product }: ProductModalProps) => {
  const { addOnePieceToCart, cart } = useCart();
  const [quantityInCart, setQuantityInCart] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    setQuantityInCart(
      cart.filter(productInCart => productInCart.id === product.id)[0]?.count ??
        0
    );
  }, [cart, product]);

  return (
    <div className='flex gap-20'>
      <div className='max-w-52 shrink-0'>
        <img src={product.image} alt={product.title} className='w-full' />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-xxl font-semibold text-mainColor mb-4'>
            {product.title}
          </h3>
          <p>
            <span className='font-semibold'>{t('Описание')}:</span>{' '}
            {product.description}
          </p>
          <p>
            <span className='font-semibold'>{t('Рейтинг')}:</span>{' '}
            {product.rating}
          </p>
          <p>
            <span className='font-semibold'>{t('Тип')}:</span> {product.type}
          </p>
          {quantityInCart > 0 && (
            <p>
              <span className='font-semibold'>{t('В корзине')}:</span>{' '}
              {quantityInCart} {t('шт.')}
            </p>
          )}
        </div>
        <div className='self-end font-semibold flex gap-6 justify-self-end'>
          <div className='flex items-center gap-3'>
            {product.oldPrice && (
              <p className=' text-s text-fourthColor transf line-through right-2'>
                {formatPrice(product.oldPrice)}
              </p>
            )}
            <p className='text-l text-secondColor'>
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            className='text-l font-semibold hover:opacity-70 transition-opacity flex self-end'
            onClick={() => addOnePieceToCart(product)}
          >
            {t('Купить')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
