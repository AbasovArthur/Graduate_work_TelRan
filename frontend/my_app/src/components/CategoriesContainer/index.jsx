import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import CategorieCard from '../CategorieCard'


export default function CategoriesContainer({h1, categories}) {

  const categories_store = useSelector(state => state.categories)
  // console.log(categories_store);

  return (
    <div className={s.container}>
      <h1>{h1}</h1>
      <div className={s.categorie}>
        {/* { categories_store.map(el => <CategorieCard key={el.id} {...el} />) } */}
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
