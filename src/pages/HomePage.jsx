import React from 'react';
import ProductCard from '../components/ProductCard';
import SearchFilter from '../components/SearchFilter';

/* Hämta Produkter från API senare*/
const products = [
  { id: 1, title: '', price: 899, image: 'url' },
  { id: 2, title: '', price: 649, image: 'url' },
  { id: 3, title: '', price: 18159, image: 'url' },
];

function HomePage() {
  return (
    <div className="space-y-10">
      <section>
        <SearchFilter />
      </section>

      <section className="bg emerald-500 text-white p-12 rounded-3xl text-center">
        <h2 className="text-4xl font-extra-bold"> NYHETER!</h2>
        <p className="mt-4 text-lg"> Hitta dina favoritprodukter hos oss!</p>
      </section>

      {/* 2. Sök & Filter (MIN existerande komponent) */}

      <section>
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          utvalda produkter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
