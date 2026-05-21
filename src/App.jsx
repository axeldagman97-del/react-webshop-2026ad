import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Header from './components/MyHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import { CartProvider } from './components/CartProvider';
import { ProductProvider } from './context/ProductContext';
import Cart from './components/CArt';

const styles = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};

function App() {
  return (
    <CartProvider>
      {' '}
      {/* Tar emot context*/}
      <BrowserRouter>
        <Header />
        <MainNavigation />
        <main className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} /> <Route />
            <Route
              path="products/:id"
              element={
                <ProductProvider>
                  <ProductPage />{' '}
                </ProductProvider>
              }
            />{' '}
            <Route />
            <Route path="/cart" element={<Cart />} /> <Route />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
