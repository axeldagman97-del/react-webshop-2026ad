//Varukorg - tar emot produktdata och ritar ut Produkten med titel, namn och bild.
//Samt knappar för att styra antalet av varje produkt.

import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { addToCart, removeFromCart } = useCart(); //hämtar funktionerna addToCart och removeFromCart

  const price = Number(item.price) || 0; //Number används för att sökerställa att priset läses in även om det skulle vara skrivet som en sträng i API:et
  const quantity = Number(item.quantity) || 1;
  const itemTotal = (price * quantity).toFixed(2);

  return (
    <li className="py-4 flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-contain rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-slate-800">{item.title}</h3>
          <p className="text-sm text-slate-400">{price} kr/st</p>
        </div>
      </div>

      <div className="text-right">
        <span className="inline-block bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-sm font-bold mr-4">
          Antal: {quantity}
        </span>
        <button
          onClick={() => addToCart(item)}
          className="px-2.5 py-1 bg-slate-100 font-semibold rounded-lg shadow-md hover:bg-slate-300 hover:shadow-xl">
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="px-2.5 py-1 bg-slate-100 font-semibold rounded-lg shadow-md hover:bg-slate-300 hover:shadow-xl">
          -
        </button>
        <span className="font-bold text-slate-800">{itemTotal} kr</span>
      </div>
    </li>
  );
}

export default CartItem;
