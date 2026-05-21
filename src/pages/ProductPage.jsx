import { useParams } from 'react-router-dom';
import { useProductsList } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const productData = useProductsList();
  const { addToCart } = useCart();

  const product = productData.products.find((p) => p.id === Number(id));

  return (
    <div className="py-8 md:py-16 max-w-5xl mx-auto px-4">
      <h1 className="font-bold">{product?.title}</h1>
      <img src={product?.thumbnail} />
      <p>{product?.description}</p>{' '}
      {/* ? = Optional chaining - läser bara om OBJEKTET existerar */}
      <p className="text-bold"> {product?.price} kr </p>
      <button
        onClick={() => addToCart(product)}
        className="w-full sm:w-auto bg-slate-800 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md active:scale-95">
        Lägg i varukorgen
      </button>
    </div>
  );
}

export default ProductPage;

//Håller på att skapa ProductPage och ett
// kontext som håller APIet i ProductContext så att enskilda produkter går att rendera i Product card
//Funderar på om man ska göra ett nytt api eller om man ska modifiera det gamla

//Designa diven rendera Api datan!
