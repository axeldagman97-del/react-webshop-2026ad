import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useProducts } from '../hooks/apiFetch';

import SearchFilter from '../components/SearchFilter';

//Skapar en smart komponent
function HomePage() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  //Ger text när sidan laddas eller om det blir error
  if (loading) return <p className="text-center p10">Laddar Produkter...</p>;
  if (error)
    return <p className="text-center text-red-500 p-10">Fel:{error}</p>;

  //rendererar ut API-listan i ProductCard

  return (
    <>
      <SearchFilter />
      <div className="Space-y-10">
        <section className="bg-emerald-500 text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-extrabold uppercase">Nyheter</h2>
          <p className="mt-4 text-lg"> Utforska våra bästa deals.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Utvalda Produkter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produktlistan mappas och objekt-nycklarna renderas ut i ProductCard */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
