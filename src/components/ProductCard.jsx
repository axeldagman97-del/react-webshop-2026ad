// smart återanvädnbar komponent för produkter

const ProductCard = ({ title, price, imageUrl, onAddToCart }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border-gray-100 flex flex-col gap-3">
    <img
      src={imageUrl}
      alt={title}
      className="h-48 w-full object-cover rounded-lg"
    />
    <h3 className="font-bold text-slate-800">{title}</h3>
    <div>
      <span className="text-emerald-600 font-semibold">{price} kr </span>
      <button
        onClick={onAddToCart}
        className="bg-slate-800 text-white px-3 py-1 rounded-md hover:bg-emerald-500 transition colors">
        Köp
      </button>
    </div>
  </div>
);

export default ProductCard;
