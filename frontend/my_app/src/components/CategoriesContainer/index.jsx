import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import CategorieCard from '../CategorieCard'
import { Link } from 'react-router-dom'


export default function CategoriesContainer({ h1, categories }) {

  const categories_store = useSelector(state => state.categories)

  return (
    <div className={s.container}>
      <Link to='/categories'>
        <h1>{h1}</h1>
      </Link>
      <div className={s.categorie}>
        {
          categories
            ?
            categories && categories
              .map(el => <CategorieCard className={s.item} key={el.id} {...el} />)
            :
            categories_store
              .map(el => <CategorieCard className={s.item} key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
