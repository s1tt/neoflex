import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import { navigation } from '../utils/navigation';
import Logo from './Logo';
import TermsModal from './modals/TermsModal';

const initialLanguage = localStorage.getItem('i18nextLng') || 'ru';
const Footer = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const { t, i18n } = useTranslation();
  const { setShowModalTrue } = useModal();

  const changeLanguageHandle = (language: 'ru' | 'en') => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <footer className='bg-[#fff] rounded-t-[30px] shadow-card flex justify-between py-[33px] px-[29px] max-sm:flex-col max-sm:items-center max-sm:gap-3'>
      <div>
        <Logo />
      </div>
      <div>
        <ul className='text-l flex flex-col gap-[11px]'>
          {navigation.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `hover:opacity-70 transition-opacity ${
                    isActive ? 'font-bold text-secondColor' : ''
                  }`
                }
              >
                {t(link.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col justify-between'>
        <button
          className='hover:opacity-70 transition-opacity text-l'
          onClick={() => setShowModalTrue(<TermsModal />)}
        >
          {t('Условия сервиса')}
        </button>
        <div className='flex gap-4 font-medium'>
          <img src='/images/lang.svg' alt='Lang' />
          <button
            className={`hover:opacity-70 transition-opacity ${
              language === 'ru' &&
              'font-bold text-secondColor hover:opacity-100'
            }`}
            onClick={() => changeLanguageHandle('ru')}
          >
            Рус
          </button>
          <button
            className={`hover:opacity-70 transition-opacity ${
              language === 'en' &&
              'font-bold text-secondColor hover:opacity-100'
            }`}
            onClick={() => changeLanguageHandle('en')}
          >
            Eng
          </button>
        </div>
      </div>
      <div className='flex items-center gap-[18px] self-start max-sm:self-auto'>
        <a
          href='https://vk.com/'
          className='hover:opacity-70 transition-opacity'
          target='_blank'
        >
          <img src='/images/VK.svg' alt='VK' />
        </a>
        <a
          href='https://telegram.org/'
          className='hover:opacity-70 transition-opacity'
          target='_blank'
        >
          <img src='/images/Telegram.svg' alt='Telegram' />
        </a>
        <a
          href='https://www.whatsapp.com/'
          className='hover:opacity-70 transition-opacity'
          target='_blank'
        >
          <img src='/images/Whatsapp.svg' alt='Whatsapp' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
