//Alis search

import { useState, useEffect } from 'react';

import { useDebounce } from './useDebounce';

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const debounceSearchTerm = useDebounce(searchTerm, 3000);

  useEffect(() => {
    if (debounceSearchTerm) {
      console.log('Gör ett tungt API med söker: ', debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'black' }}>Sök produkter</h2>
      <input
        type="text"
        placeholder="Börja skriva..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
