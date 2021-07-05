const priceFormat = (number) =>
  new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
  }).format(number);

const numberFormat = (number) =>
  new Intl.NumberFormat().format(number);

export { priceFormat, numberFormat };