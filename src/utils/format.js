const priceFormat = (number) =>
  new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
  }).format(number);

const numberFormat = (number) =>
  new Intl.NumberFormat().format(number);

const firstUppercaseFormat = (text) => 
  text.charAt(0).toUpperCase() + text.slice(1);

export { priceFormat, numberFormat, firstUppercaseFormat };