import { createContext, useContext } from 'react';
import { useProducts } from '../hooks/apiFetch';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const productData = useProducts();

  console.log('helaApi-datan', productData);

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductList = () => {
  const context = useContext(ProductContext);
  return context;
};

//komponenten håller hela contexten för hela api:et
