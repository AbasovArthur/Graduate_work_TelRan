import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import DiscFiltrSortForm from '../../components/UI/FilterForms/DiscFiltrSortForm'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(all_products_state))
}, [all_products_state])

  return (
    <div>
      <DiscFiltrSortForm discount_show={true}/> 
      <ProductsContainer products={all_products_state} h1={'All products'} />
    </div>
  )
}
