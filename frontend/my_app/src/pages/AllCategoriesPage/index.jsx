import React from 'react'
import { getAllCategories } from '../../requests/categories_req'
import CategoriesContainer from '../../components/CategoriesContainer'

export default function AllCategoriesPage() {

  // getAllCategories()

  return (
    <div>
      <CategoriesContainer h1='Categories'/>
    </div>
  )
}
