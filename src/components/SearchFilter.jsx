/* SearchFilter med Debounce*/

import { useState, useEffect } from 'react';
import React from 'react';
import ProductCard from './ProductCard';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState(''); // state för sökrutan
  const [products, setProducts] = useState([]); //State för produkterna i API:et
  const [fetched, setFetched] = useState(false); // På och Av för fetch, kontrollerar när hämtningen får börja.

  useEffect(() => {
    if (!fetched) return; //Stoppar onödig fetch

    //1. startar timern Debounce
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
    }, 2000);

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
          setSearchTerm(e.target.value); // onChange Triggas när det skrivs i sökrutan
          setFetched(true); // slår på UseEffecten för setFetch
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

export default SearchFilter;
