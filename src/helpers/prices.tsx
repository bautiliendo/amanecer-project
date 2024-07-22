export const parsePrice = (price: string): number => {
    return parseFloat(price.replace('$', '').replace('.', '').replace(',', '.'));
  }
  
  export const formatPrice = (price: number): string => {
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  }