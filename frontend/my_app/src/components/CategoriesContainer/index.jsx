import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import CategorieCard from '../CategorieCard'


export default function CategoriesContainer({h1}) {

  const categorie_store = useSelector(state => state.categories)

  return (
    <div className={s.container}>
      <h1>{h1}</h1>
      <div className={s.categories}>

        { categorie_store.map(el => <CategorieCard key={el.id} {...el} />) }
      </div>
    </div>
  )
}
