import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategorieCard({id, title, image }) {
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
