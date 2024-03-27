import { Product } from '../types/product';
import Card from './Card';

interface CardListProps {
  products: Product[];
}

const CardList = ({ products }: CardListProps) => {
  return (
    <ul className='gap-[30px] mb-[20px] grid grid-cols-3 max-xl:grid-cols-2 justify-items-center max-md:grid-cols-1'>
      {products.map(product => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
