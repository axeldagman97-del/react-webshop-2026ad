import { useState, useEffect } from 'react';
import React from 'react';
import ProductCard from './ProductCard';

const SearchUi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) return;

    //1. starta timern Debounce
    const timer = setTimeout(async () => {
      try {
        const req = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );

        if (!req.ok) {
          throw new Error('fel');
        }

        const data = await req.json();
        console.log('Hela API-svaret', data.products);

        setProducts(data.products);
      } catch (error) {
        console.log('något gick fel', error);
      }
    }, 3000);

    //2 Cleanup
    return () => {
      clearTimeout(timer);
      setFetched(false);
    };
  }, [searchTerm, fetched]);

  return (
    <div>
      <input
        type="text"
        placeholder="Sök produkt"
        value={searchTerm}
        className="p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setFetched(true);
        }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '20px',
        }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} /> //produkter renderas i PrductCard komponenten
        ))}
      </div>
    </div>
  );
};

export default SearchUi;

/*function SrcComponent() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('api sökning på', searchTerm);
    }, 500);
  });
}

export default srcComponent; */
