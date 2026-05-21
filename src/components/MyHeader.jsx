import React from 'react';
import AlienBild from '../assets/pics/alien.png';

const styles = {
  header:
    'w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors',
  container: 'container mx-auto px-4 h-20 flex items-center justify-between',
  logoWrapper: 'flex items-center gap-3',
  logoImage: 'h-12 w-auto object-contain hover:scale-110 transition-transform',
  logoText: 'text-xl font-bold text-slate-800 dark:text-white hidden sm:block',
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img
            src={AlienBild}
            alt="Alien Header bild"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Space Shop</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
