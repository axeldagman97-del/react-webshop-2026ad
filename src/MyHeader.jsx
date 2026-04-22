import React from 'react';

function Header() {
  return (
    <div className="bg-mint-500 shadow-md p-6">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logotypen */}
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tighter">
          Dagmans Projekt
        </h1>

        {/* Menyn - vi använder en div eller ul här för att samla länkarna på en rad */}
        <div className="flex space-x-8">
          <h2 className="text-lg font-semibold">
            <a
              href="#contact"
              className="text-gray-600 hover:text-green-500 transition-colors">
              Contact
            </a>
          </h2>
          <h2 className="text-lg font-semibold">
            <a
              href="#About"
              className="text-gray-600 hover:text-green-500 transition-colors">
              About
            </a>
          </h2>
          <h2 className="text-lg font-semibold">
            <a
              href="#Store"
              className="text-gray-600 hover:text-green-500 transition-colors">
              Store
            </a>
          </h2>
        </div>
      </nav>
    </div>
  );
}

export default Header;
