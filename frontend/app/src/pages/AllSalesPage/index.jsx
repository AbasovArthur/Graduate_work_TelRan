//frontend\app\src\pages\AllSalesPage\index.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import DiscFiltrSortForm from '../../components/FilterForms/DiscFiltrSortForm'

export default function AllSalesPage() {

  const all_products_state = useSelector(state => state.allProducts)
// console.log(all_products_state);

const products_like_sale = all_products_state.filter(el=>el.discont_price)

// export const products_like_sale

  return (
    <div>
      <DiscFiltrSortForm discount_show={false}/>
      <ProductsContainer products={products_like_sale} h1={'Products with sale'} />
    </div>
  )
}
