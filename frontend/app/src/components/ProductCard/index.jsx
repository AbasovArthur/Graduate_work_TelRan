import React from 'react'
import s from './style.module.css'


export default function ProductCard({id, title, image, createdAt, updatedAt }) {
  return (
    <div>
        {/* <img src={`http://localhost:3333/products/${id}/${image}`} alt={title} /> */}
        {/* <img src={`http://localhost:3333/categories/${id}/${image}`} alt={title} /> */}
        {/* <img src={`http://localhost:3333/categories/${id}/products/${id}/${image}`} alt={title} /> */}
        <img src={`http://localhost:3333/categories/${image}`} alt={title} />
    </div>
  )
}
