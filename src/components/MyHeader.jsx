import React from 'react';
import AlienBild from '../assets/pics/alien.png';

function Header() {
  console.log(AlienBild);
  return (
    <div>
      <img src={AlienBild} alt="Alien Header bild" className="logo" />
    </div>
  );
}

export default Header;
