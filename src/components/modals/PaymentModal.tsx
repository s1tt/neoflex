import { ChangeEvent, FocusEvent, useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/useCart';
import { useModal } from '../../hooks/useModal';
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate
} from '../../utils/payment';

interface PaymentModalState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: Focused | undefined;
}

const initialState: PaymentModalState = {
  number: '',
  expiry: '',
  cvc: '',
  name: '',
  focus: ''
};

const PaymentModal = () => {
  const [state, setState] = useState<PaymentModalState>(initialState);
  const { setShowModalFalse } = useModal();
  const { clearCart } = useCart();
  const { t } = useTranslation();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name } = evt.target;
    let { value } = evt.target;
    if (name === 'number') {
      value = formatCreditCardNumber(value);
    } else if (name === 'expiry') {
      value = formatExpirationDate(value);
    } else if (name === 'cvc') {
      value = formatCVC(value);
    }

    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, focus: evt.target.name as Focused }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(initialState);
    setShowModalFalse();
    clearCart();
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form
        className='flex flex-col items-center mt-5 gap-1'
        onSubmit={e => handleSubmit(e)}
      >
        <input
          className='border-2 focus:outline-secondColor p-1'
          type='text'
          name='number'
          placeholder='Card Number'
          value={state.number}
          minLength={19}
          maxLength={19}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className='border-2 focus:outline-secondColor p-1'
          type='text'
          name='name'
          placeholder='Name'
          value={state.name}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className='border-2 focus:outline-secondColor p-1'
          type='text'
          name='expiry'
          placeholder='Valid Thru'
          minLength={5}
          value={state.expiry}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className='border-2 focus:outline-secondColor p-1'
          type='text'
          name='cvc'
          placeholder='CVC'
          value={state.cvc}
          minLength={3}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button
          type='submit'
          className='mt-4 hover:opacity-70 transition-opacity'
        >
          {t('Оформить')}
        </button>
      </form>
    </div>
  );
};

export default PaymentModal;
