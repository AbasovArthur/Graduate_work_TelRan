//frontend\app\src\pages\MainPage\index.jsx
import React, { useEffect, useState } from 'react'
import MainBanner from '../../components/MainBanner'
import CategoriesContainer from '../../components/CategoriesContainer'
import MainForm from '../../components/MainForm'
import ProductsContainer from '../../components/ProductsContainer'
import { useSelector } from 'react-redux'

export default function MainPage() {

  const limit = 4;
  const [ visibleCard, setVisibleCard ] = useState(limit);

  useEffect(() => {
    const handle_resize = () => {
      if (window.innerWidth <= 480) {
        setVisibleCard(1)
      } else if (window.innerWidth <= 768) {
        setVisibleCard(2)
      } else if (window.innerWidth <= 1280) {
        setVisibleCard(3)
      } else {
        setVisibleCard(limit)
      }
    }
    handle_resize();
    window.addEventListener('resize', handle_resize);
    return () => {
      window.removeEventListener('resize', handle_resize);
    };
  }, [ limit ]);

  const products_state = useSelector(state => state.allProducts)
  const category_state = useSelector(state => state.categories)

  const shuffleArray = (array) => {
    return array.reduce((acc, value) => {
      const randIndex = Math.floor(Math.random() * (acc.length + 1));
      return [...acc.slice(0, randIndex), value, ...acc.slice(randIndex)];
    }, []);
  }

  const products_like_sale = shuffleArray(products_state.filter(el => el.discont_price)).slice(0, visibleCard);
  const show_category = shuffleArray(category_state).slice(0, visibleCard);
  // const show_category = visibleCard ? category_state.slice(0, visibleCard) : category_state


  return (
    <div>
      <MainBanner />
      <CategoriesContainer categories={show_category} h1={'Catalog'} />
      <MainForm />
      <ProductsContainer products={products_like_sale} h1={'Sale'} />
    </div>
  )
}

  // const products_like_sale = shuffleArray(products_state.filter(el => el.discont_price));
  
  // const show_product_sale = visibleCard ? (products_like_sale).slice(0, visibleCard) : products_like_sale
/*
  const all_products_state = useSelector(state => state.allProducts)
  const products_like_sale = all_products_state.filter(el=>el.discont_price)
  
  const show_product_sale = visibleCard ? (products_like_sale).slice(0, visibleCard) : products_like_sale
  
  const category_store = useSelector(state => state.categories)
  const show_category = visibleCard ? category_store.slice(0, visibleCard) : category_store
  */

/*
  const all_products_state = useSelector(state => state.allProducts)
  const category_store = useSelector(state => state.categories)

  const products_like_sale = all_products_state.filter(el=>el.discont_price)
  
  const show_product_sale = visibleCard ? (products_like_sale || category_store).slice(0, visibleCard) : (products_like_sale || category_store)
  */

  /*
  const { products_state, category_state } = useSelector(state => ({
    products_state: state.allProducts,
    category_state: state.categories
  }));
*/