/* */

import { useParams } from 'react-router-dom';
import { useProductList } from '../context/ProductContext';
import CategoryMenu from '../components/CategoryMenu';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const { products, loading, error } = useProductList(); // Hämtar hook från Product Context
  const { categoryName } = useParams(); //håller koll på de dynamiska delarna i url:en

  if (loading) return <p className="text-center py-10">Laddar produkter...</p>; // Visaar en laddningstext om Api hämtningen dröjer
  if (error)
    return <p className="text-center py-10 text-red-500">Fel: {error}</p>; //felmeddelande

  //displayedProducts = Ternary Operator, på en If/else-sats
  const displayedProducts = categoryName
    ? products.filter((p) => p.category === categoryName)
    : products;

  return (
    <div className="py-6">
      <h1 className="text-3xl font-black text-slate-800 mb-2 capitalize">
        {categoryName ? categoryName : 'Våra Produkter'}
      </h1>

      <CategoryMenu />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
