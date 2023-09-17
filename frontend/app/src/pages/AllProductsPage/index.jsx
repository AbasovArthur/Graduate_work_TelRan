import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import SortForm from '../../components/FilterForms/SortForm'
import FilterForm from '../../components/FilterForms/FilterForm'
import s from './style.module.css'
import DiscountProductForm from '../../components/FilterForms/DiscountProductForm'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)
  // console.log(all_products_state);

  return (
    <div>
      <div className={s.filter_forms}>
        <FilterForm />
        <DiscountProductForm />
        <SortForm />
      </div>
      <ProductsContainer products={all_products_state} h1={'All products'} />
    </div>
  )
}
