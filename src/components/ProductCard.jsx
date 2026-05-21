import { Link } from 'react-router-dom';

// smart återanvädnbar komponent för produkter

const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, price, thumbnail } = product;

  return (
    <>
      {/* lägg in routing till productPage */}

      <div className="bg-white p4 rounded-xl shadow-md border-gray-100 flex flex-col gap-3">
        <Link to={`products/${id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="h-48 w-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        <h3 className="font-bold text-slate-800">{title}</h3>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-emerald-600 font-semibold">{price} kr </span>
          <button
            onClick={() => onAddToCart(product)} // Skickar tillbaka hela produkten till Smart-komponenten
            className="bg-slate-800 text-white px-3 py-1 m-6 rounded-md hover:bg-emerald-500 transition-colors">
            Köp
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
