import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 119.99
  },
  {
    description: 'iPad',
    price: 149.95
  }
];

//Tax = 0.15
const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15
});

console.log('Total:', total);
console.log('Total:', tax);
