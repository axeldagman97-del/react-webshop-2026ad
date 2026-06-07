/* DEn här komponenten skannar igenom produktlistan i api:et 
och renderar ut menyn därefter, 
uppdaterar dynamiskt ifall en ny kategori läggs till i Api:et
*/

import { NavLink } from 'react-router-dom';
import { useProductList } from '../context/ProductContext'; // 👈 Vi hämtar din existerande hook!

function CategoryMenu() {
  const { products, loading } = useProductList();

  if (loading) {
    return (
      <div className="text-sm text-slate-400 py-2 px-4">
        {' '}
        Laddar Produkter...
      </div>
    );
  }

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category))); //(set inbyggd funktion som vägrar spara dubletter)

  return (
    <nav className="bg-slate-50 border-b border-slate-200 py-3 mb-6 rounded-xl">
      <div className="flex flex-wrap gap-3 px-4">
        <NavLink
          end
          to="/products"
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
              isActive
                ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`
          }>
          Alla
        </NavLink>

        {/* resten av menyn byggs här */}

        {uniqueCategories.map((category) => (
          <NavLink
            key={category}
            to={`/products/category/${category}`}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-sm font-semibold border capitalize transition-all ${
                isActive
                  ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`
            }>
            {category}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default CategoryMenu;
