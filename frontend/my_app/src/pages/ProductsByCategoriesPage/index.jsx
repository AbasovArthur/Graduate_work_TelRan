import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer'
import DiscFiltrSortForm from '../../components/UI/FilterForms/DiscFiltrSortForm'


export default function ProductsByCategoriesPage() {
  
  const {id} = useParams()

  const category = useSelector(state => state.categories)
  const all_product = useSelector(state => state.allProducts)

  const title_category = category.find(el => el.id === +id)
  const product_by_category = all_product.filter(el => el.categoryId === +id)

  // console.log(product_by_category);

  return (
    <div>
      <DiscFiltrSortForm discount_show={true}/>
      <h1>{title_category?.title}</h1>
      <ProductsContainer products={product_by_category} />
    </div>
  )
}
