import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsbyCategory } from '../../requests/products_req'

export default function ProductsByCategoriesPage() {

  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => dispatch(getProductsbyCategory(id)),[])

  const products_by_category_state = useSelector(state => state.productsByCategory)

  console.log(products_by_category_state);
  
  return (
    <div>
      
    </div>
  )
}
