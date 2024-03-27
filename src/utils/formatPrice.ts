export const formatPrice = (price: number) => {
  return price.toLocaleString('ru-ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  });
};
