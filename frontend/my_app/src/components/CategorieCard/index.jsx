import React from 'react'
import s from './style.module.css'

export default function CategorieCard({ title, image }) {
  return (
    <div>

        <div className={s.card}>
          <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />

          <p >{title}</p>
        </div>

    </div>
  )
}
