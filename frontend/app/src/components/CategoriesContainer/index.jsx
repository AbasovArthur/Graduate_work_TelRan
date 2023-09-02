import React from 'react'
import { useSelector } from 'react-redux'
import CartPage from '../../pages/CartPage'
import CategoryCard from '../CategoryCard';

export default function CategoriesContainer() {

  const category_store = useSelector(state => state.categories)
  // console.log(category_store);

  return (
    <div>
      { category_store.map(el => <CategoryCard key={el.id} {...el} />) }
    </div>
  )
}
