import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Header from './components/MyHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <MainNavigation />
        <HomePage />
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
