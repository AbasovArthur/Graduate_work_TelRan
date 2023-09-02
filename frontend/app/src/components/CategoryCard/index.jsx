import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ id, title, image, createdAt, updatedAt }) {
  return (
    <div>
      <Link to={`/categories/${id}`}>
        <p>{title}</p>

        <img src={`http://localhost:3333${image}`} alt={title} />
      
      </Link>

    </div>
  )
}

/*
<div key={id} className={s.category_card} style={{backgroundImage: `url(http://localhost:3333${image})`, backgroundSize: 'cover'}} />

        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />

*/
