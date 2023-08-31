import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import AllSalesPage from './pages/AllSalesPage';
import { getAllCategories } from './requests/catregories_req';

function App() {

  const dispatch = useDispatch()
  useEffect(() => dispatch(getAllCategories), [])

  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/sale' element={<AllSalesPage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
