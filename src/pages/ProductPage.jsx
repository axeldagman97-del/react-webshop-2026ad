//Produktsida - visar all info om den valda produkten. samt renderar lägg till i cart knapp.

import { useParams } from 'react-router-dom';
import { useProductList } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const productData = useProductList();
  const { addToCart } = useCart();

  const product = productData.products.find((p) => p.id === Number(id));

  return (
    <div className="py-8 md:py-16 max-w-5xl mx-auto ps-4 px-4">
      <h1 className="font-bold">{product?.title}</h1>
      <img src={product?.thumbnail} />
      <p>{product?.description}</p>{' '}
      {/* ? = Optional chaining - läser bara om OBJEKTET existerar */}
      <h1 className="font-bold py-4"> {product?.price} kr </h1>
      <button
        onClick={() => addToCart(product)}
        className="w-full sm:w-auto bg-slate-800 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md active:scale-95">
        Lägg i varukorgen
      </button>
    </div>
  );
}

export default ProductPage;
