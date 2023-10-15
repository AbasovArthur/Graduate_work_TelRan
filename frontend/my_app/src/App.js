import './App.css';
import Footer from './components/FooterArea/Footer';
import NavMenu from './components/NavigationBar/NavMenu';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import AllSalesPage from './pages/AllSalesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './requests/categories_req';
import { getAllProducts } from './requests/products_req';

function App() {

  const dispatch = useDispatch()
  useEffect(() => dispatch(getAllCategories), [])
  useEffect(() => dispatch(getAllProducts), [])

  const cart_state = useSelector(state => state.cart)

  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart_state))
  }, [cart_state])


  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/sale' element={<AllSalesPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
