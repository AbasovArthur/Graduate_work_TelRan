//frontend\app\src\components\CategoriesContainer\index.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import s from './style.module.css'

export default function CategoriesContainer({ h1, categories }) {


  const category_store = useSelector(state => state.categories)

  return (
    <div className={s.container}>
      <Link to='/categories'>
        <h1>{h1}</h1>
      </Link>
      <div className={s.categories}>

        {
          categories
            ?
            categories && categories
              .map(el => <CategoryCard className={s.item} key={el.id} {...el} />)
            :
            category_store
              .map(el => <CategoryCard className={s.item} key={el.id} {...el} />)

        }

      </div>
    </div>
  )
}
