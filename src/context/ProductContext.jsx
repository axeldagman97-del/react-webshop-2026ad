import { createContext, useContext } from 'react';
import { useProducts } from '../hooks/apiFetch';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const productData = useProducts();

  console.log('hela Api-datan', productData);

  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductsList = () => {
  const context = useContext(ProductContext);
  return context;
};
