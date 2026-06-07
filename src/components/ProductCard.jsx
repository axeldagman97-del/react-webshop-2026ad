import { Link } from 'react-router-dom';

// smart återanvädnbar komponent för produkter

const ProductCard = ({ product }) => {
  const { id, title, price, thumbnail } = product;

  return (
    <>
      <Link to={`/products/${id}`}>
        {' '}
        {/*/tamplate literals och ${id} för att bygga dynamisk url*/}
        <div className="bg-white p-4 rounded-xl shadow-md border-gray-100 flex flex-col gap-3">
          <img
            src={thumbnail}
            alt={title}
            className="h-48 w-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          />
          <h3 className="font-bold text-slate-800">{title}</h3>

          <div className="mt-auto flex justify-between items-center">
            <span className="text-emerald-600 font-semibold">{price} kr </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
