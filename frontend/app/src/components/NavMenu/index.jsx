import React from 'react'
import {Link} from 'react-router-dom'

export default function NavMenu() {
  return (
    <div>
      <Link to='/' >Main Page</Link>
      <Link to='/products' >All products</Link>
      <Link to='/categories' >Categories</Link>
      <Link to='/sale'>All sales</Link>
    </div>
  )
}
{/* <Route path='/categories' element={<AllCategoriesPage />} /> */}