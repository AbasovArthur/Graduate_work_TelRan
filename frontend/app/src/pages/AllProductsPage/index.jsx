import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import DiscFiltrSortForm from '../../components/FilterForms/DiscFiltrSortForm'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)
  // console.log(all_products_state);

  return (
    <div>
      <DiscFiltrSortForm /> 
      <ProductsContainer products={all_products_state} h1={'All products'} />
    </div>
  )
}
