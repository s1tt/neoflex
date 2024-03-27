import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col'>
      <h2 className='text-xl text-thirdColor mb-[20px] font-semibold'>
        {t('Контакты')}
      </h2>
      <p className='font-semibold'>
        {t('Телефон')}:{' '}
        <a
          className='hover:opacity-70 transition-opacity text-secondColor'
          href='tel:+7(985)123-45-67'
        >
          +7(985)123-45-67
        </a>
      </p>
      <p className='font-semibold'>
        {t('E-mail')}:{' '}
        <a
          className='hover:opacity-70 transition-opacity text-secondColor'
          href='mailto:username@example.com'
        >
          username@example.com
        </a>
      </p>
      <p className='mb-5 font-semibold'>
        {t('Адрес')}: {t('Полный адрес')}
      </p>
      <iframe
        className='self-center'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.101428418744!2d37.61631090475339!3d55.75111368379925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0x454e6eaf826aaa9a!2sDormition%20Cathedral!5e0!3m2!1sen!2sus!4v1711253720016!5m2!1sen!2sus'
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </section>
  );
};

export default ContactPage;
