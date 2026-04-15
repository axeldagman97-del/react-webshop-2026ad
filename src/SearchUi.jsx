import { useState, useEffect } from 'react';
import React from 'react';

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
  }, [searchTerm]);

  return (
    <div>
      <h2> Smart sök</h2>
      <input
        type="text"
        placeholder="skriv för att söka"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setFetched(true);
        }}
      />

      <ul style={{ display: 'flex' }}>
        {products.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{ width: '18rem', border: '5px' }}>
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.title}</p>
            </div>
          </div>
        ))}
      </ul>
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
