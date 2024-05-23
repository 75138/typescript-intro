export interface Product {
  description: string;
  price: number;
}

export interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions ): [ number, number ] {
  const {tax, products} = options
  let total = 0;

  products.forEach( ({price}) => {
    total += price
  });
  return [total, total * tax]
}

const tablet: Product = {
  description: 'iPad Air',
  price: 250.00
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalPlusTaxes] = taxCalculation({
  products: shoppingCart,
  tax: tax
});

console.log('Total:', total)
console.log('Tax:', totalPlusTaxes)
