//komponent för  Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/*
 NavLink en intern funktionell-komponent för att slippa upprepa Tailwind-klasser.
 Den tar emot 'to' (destination) och 'children' (texten-strängen i länken) .
 */

/* {to, children} = props */
/*  NavLink Gör så att man bara behöver ändra css:en på ett ställe för att påverka alla Knappar/läänkar */

const NavLink = ({ to, children }) => (
  <h2>
    <Link
      to={to}
      className="text-lg transition-colors duration-300 hover:text-yellow-400">
      {children}
    </Link>
  </h2>
);

function MainNavigation() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    /* Bakgrunden och textfärgen för hela navigationsfältet */
    <div className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex items center justify-between p-6 top-0 ">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          DAGMANS WEBBSHOP
        </h1>
        <div className="flex gap-8 ">
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/products">Kategorier</NavLink>
          <NavLink to="/cart">Kundvagn({totalItems})</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigation;
