import { MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';
import { useFavorite } from '../hooks/useFavorite';
import { useModal } from '../hooks/useModal';
import { Product } from '../types/product';
import { formatPrice } from '../utils/formatPrice';
import ProductModal from './modals/ProductModal';

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { addOnePieceToCart } = useCart();
  const { showModal, setShowModalTrue } = useModal();
  const [isLiked, setIsLiked] = useState(false);
  const { isLikedProduct, likeProduct, unlikeProduct } = useFavorite();
  const { t } = useTranslation();

  useEffect(() => {
    setIsLiked(isLikedProduct(product.id));
  }, [isLikedProduct, product.id]);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  const toggleLikeProduct = (
    e: MouseEvent<HTMLImageElement>,
    product: Product
  ) => {
    e.stopPropagation();
    console.log(isLiked);
    if (isLiked) {
      unlikeProduct(product.id);
    } else {
      likeProduct(product);
    }
  };
  return (
    <article className='bg-[#ffffff] w-[350px] rounded-[30px] shadow-card flex flex-col gap-[54px] px-[20px] pb-[33px] pt-[15px]'>
      <div
        className='flex justify-center h-[237px] items-center hover:cursor-pointer relative rounded-3xl'
        onClick={() => setShowModalTrue(<ProductModal product={product} />)}
      >
        <img src={product.image} alt={product.title} className='' />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-mainColor opacity-0 rounded-3xl flex justify-center items-center transition-opacity hover:opacity-35'>
          <img src={'/src/assets/eye.svg'} alt='Eye' className='w-1/2' />
        </div>
        <img
          src={isLiked ? '/src/assets/liked.svg' : '/src/assets/notLiked.svg'}
          onClick={e => toggleLikeProduct(e, product)}
          alt='not liked'
          className='absolute right-3 top-3 w-7 hover:scale-125 transition-transform'
        />
      </div>
      <div className='grid grid-cols-2 gap-y-[25px]'>
        <p
          className='font-semibold text-mainColor text-l cursor-pointer hover:opacity-70 transition-opacity'
          onClick={() => setShowModalTrue(<ProductModal product={product} />)}
        >
          {product.title}
        </p>
        <div className='relative justify-self-end font-semibold'>
          <p className='text-l text-secondColor'>
            {formatPrice(product.price)}
          </p>
          {product.oldPrice && (
            <p className='absolute text-s text-fourthColor transf line-through right-2'>
              {formatPrice(product.oldPrice)}
            </p>
          )}
        </div>
        <div className='flex gap-[10px] items-center '>
          <img src='/src/assets/star.svg' alt='Star' />
          <span className='font-semibold text-thirdColor text-l'>
            {product.rating}
          </span>
        </div>
        <button
          className='justify-self-end text-l font-semibold relative top-[8px] hover:opacity-70 transition-opacity'
          onClick={() => addOnePieceToCart(product)}
        >
          {t('Купить')}
        </button>
      </div>
    </article>
  );
};

export default Card;
