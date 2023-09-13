import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import s from './style.module.css'

export default function CategoriesContainer({h1}) {

  const category_store = useSelector(state => state.categories)

  return (
    <div className={s.container}>

      <h1>{h1}</h1>

      <div className={s.categories}>
        {category_store.map(el => <CategoryCard className={s.item} key={el.id} {...el} />)}
      </div>

    </div>
  )
}
