import { useTranslation } from 'react-i18next';
import CardList from '../components/CardList.tsx';
import { useData } from '../hooks/useData.tsx';

const MainPage = () => {
  const { products, wired, wireless, isLoading } = useData();
  const { t } = useTranslation();

  if (isLoading) {
    return <h3 className='text-xl text-center text-thirdColor'>Loading...</h3>;
  }

  if (!products.length) {
    return (
      <h3 className='text-xl text-center text-thirdColor'>
        {t('Список товаров пуст')}
      </h3>
    );
  }

  return (
    <section>
      {wired.length > 0 && (
        <>
          <h2 className='text-xl text-thirdColor mb-[20px] font-semibold'>
            {t('Наушники')}
          </h2>
          <CardList products={wired} />
        </>
      )}
      {wireless.length > 0 && (
        <>
          <h2 className='text-xl text-thirdColor mb-[20px] font-semibold pt-[8px]'>
            {t('Беспроводные наушники')}
          </h2>
          <CardList products={wireless} />
        </>
      )}
    </section>
  );
};

export default MainPage;
