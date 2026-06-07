import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Header from './components/MyHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Checkout from './components/Checkout';
import Cart from './pages/Cart';

import { CartProvider } from './components/CartProvider';
import { ProductProvider } from './context/ProductContext';

const styles = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};

//Länkar och kontext, single page app

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        {/* Provider tar emot context*/}
        <BrowserRouter>
          <Header />
          <MainNavigation />
          <main className={styles.container}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route
                path="/products/category/:categoryName"
                element={<ProductList />}
              />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
