import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RoutePath } from '../utils/pages';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col items-center justify-center my-auto'>
      <h2 className='text-xl text-thirdColor mb-[20px] font-semibold text-center'>
        {t('Страница не найдена')}!
      </h2>
      <p>
        <Link
          to={RoutePath.main}
          className='text-l font-semibold hover:opacity-70 transition-opacity'
        >
          {t('На главную')}
        </Link>
      </p>
    </section>
  );
};

export default NotFoundPage;
