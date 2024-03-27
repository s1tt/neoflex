import { Product, ProductInCart } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

interface SecondCardProps {
  product: ProductInCart;
  addOnePieceToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  removeOnePieceFromCart: (productId: number) => void;
}

const SecondCard = ({
  product,
  addOnePieceToCart,
  removeProductFromCart,
  removeOnePieceFromCart
}: SecondCardProps) => {
  return (
    <article className='bg-[#fff] rounded-[30px] shadow-card w-[633px] pt-[18px] pr-[28px] pb-[15px] pl-[19px] flex justify-between max-lg:w-full'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-[24px] mb-[19px]'>
          <img src={product.image} alt={product.title} className='h-[124px]' />
          <div className='flex flex-col gap-[12px]'>
            <p className='font-medium text-l text-mainColor'>{product.title}</p>
            <span className='font-semibold text-m text-[#aaa]'>
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
        <div className='flex justify-between items-center w-[120px]'>
          <img
            src='/src/assets/minus.svg'
            alt='minus'
            className='cursor-pointer hover:opacity-70 transition-opacity'
            onClick={() => removeOnePieceFromCart(product.id)}
          />
          <span className='font-semibold text-l'>{product.count}</span>
          <img
            src='/src/assets/plus.svg'
            alt='plus'
            className='cursor-pointer hover:opacity-70 transition-opacity'
            onClick={() => addOnePieceToCart(product)}
          />
        </div>
        {/* <div>
          <p>{product.title}</p>
          <span>{formatPrice(product.price)}</span>
        </div> */}
      </div>
      <div className='flex flex-col justify-between items-end'>
        <button
          className='hover:opacity-70 transition-opacity'
          onClick={() => removeProductFromCart(product.id)}
        >
          <img src='/src/assets/Remove.svg' alt='Remove' />
        </button>
        <span className='font-semibold text-mainColor text-m'>
          {formatPrice(product.price * product.count)}
        </span>
      </div>
    </article>
  );
};

export default SecondCard;
