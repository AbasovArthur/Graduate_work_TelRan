import React from 'react'
import { useSelector } from 'react-redux'
import CartPage from '../../pages/CartPage'

export default function CategoriesContainer() {

  const category_store = useSelector(state => state.categories)

  return (
    <div>
      { category_store.map(el => <CartPage key={el.id} {...el} />) }
    </div>
  )
}
