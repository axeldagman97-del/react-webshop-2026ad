import React from 'react';
import { Link } from 'react-router-dom';

/**
 * En intern funktionell-komponent för att slippa upprepa Tailwind-klasser.
 * Den tar emot 'to' (destination) och 'children' (texten i länken).
 */

/* {to, children} = props */

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
  return (
    /* Bakgrunden och textfärgen för hela navigationsfältet */

    <div className="bg-slate-800 text-white shadow-lg">
      <nav className="container mx-auto flex items center justify-between p-6">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          DAGMANS WEBBSHOP
        </h1>

        <div className="flex gap-8">
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/about">Contact</NavLink>
          <NavLink to="/cart">Kundvagn</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigation;
