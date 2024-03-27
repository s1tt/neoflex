import { useTranslation } from 'react-i18next';
import CardList from '../components/CardList';
import { useFavorite } from '../hooks/useFavorite';

const FavoritesPage = () => {
  const { likedProducts } = useFavorite();
  const { t } = useTranslation();
  return (
    <section>
      <h2 className='text-xl text-thirdColor mb-[20px] font-semibold'>
        {t('Избранные товары')}
      </h2>
      {likedProducts.length > 0 ? (
        <>
          <CardList products={likedProducts} />
        </>
      ) : (
        <h3 className='text-center'>{t('Список товаров пуст')}</h3>
      )}
    </section>
  );
};

export default FavoritesPage;
