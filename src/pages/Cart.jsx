//komponent för cart. Använder hooken useCart för att hämta produkt-data och totalpris

import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  // plockar ut datan för cart och det färdiga priset direkt från Context

  const { cart, roundedPrice } = useCart();

  if (cart.length === 0) {
    // returnerar meddelande om varukorgen är tom
    return (
      <div className="max-w-2xl mx-auto p-6 text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">din kundvagn</h1>
        <p className="text-slate-500"> Din kundvagn är tom </p>
      </div>
    );
  }

  return (
    <div>
      <h1> Din Kundvagn</h1>
      <ul className="divide-y divide-slate-100">
        {cart.map((product) => (
          <CartItem key={product.id} item={product} />
        ))}
      </ul>

      <div className="border-t border-slate-100 pt-6 mt-6 flex justify-between items-center">
        <div>
          <p className="text-xl text-slate-800  uppercase tracking-wider">
            Totalsumma: {roundedPrice} kr
          </p>
        </div>
        <Link
          to="/checkout"
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md">
          Gå till kassan
        </Link>
      </div>
    </div>
  );
}

export default Cart;
