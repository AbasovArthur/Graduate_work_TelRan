import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function CategoryCard({ id, title, image, createdAt, updatedAt }) {
  return (
    <div>
      <Link to={`/categories/${id}`}>
        
      <div className={s.card}>
        <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />

        <p >{title}</p>
      </div>
      
      </Link>

    </div>
  )
}

