import { useTranslation } from 'react-i18next';

const TermsModal = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-l font-semibold text-mainColor'>
        {t('Условия сервиса')}:
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam
        itaque nobis. Distinctio, asperiores voluptatem! Exercitationem
        explicabo suscipit repellat doloribus id esse consequatur quibusdam quos
        eos quisquam. Dolores, facere quia?
      </p>
    </div>
  );
};

export default TermsModal;
