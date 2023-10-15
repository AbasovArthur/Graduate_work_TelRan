import React from 'react'
import DiscFiltrSortForm from '../../components/UI/FilterForms/DiscFiltrSortForm'
import ProductsContainer from '../../components/ProductsContainer'
import { useSelector } from 'react-redux'

export default function AllSalesPage() {

  const all_products_state = useSelector(state => state.allProducts)
  const products_like_sale = all_products_state.filter(el => el.discont_price)


  return (
    <div>
      <DiscFiltrSortForm discount_show={false}/>
      <ProductsContainer products={products_like_sale} h1={'Products with sale'} />
    </div>
  )
}
