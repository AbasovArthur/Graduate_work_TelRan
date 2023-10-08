import React from 'react'
import { getAllCategories } from '../../requests/categories_req'

export default function AllCategoriesPage() {

  getAllCategories()

  return (
    <div>AllCategoriesPage</div>
  )
}
