import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  return (
    <div>
      <ProductsContainer products={all_products_state} h1={'All products'} />
    </div>
  )
}
