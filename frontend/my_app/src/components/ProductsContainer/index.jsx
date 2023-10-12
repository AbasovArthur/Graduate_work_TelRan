import React from 'react'
import s from './style.module.css'
import ProductCard from '../ProductCard'

export default function ProductsContainer({ products, h1 }) {

  return (
    <div className={s.container}>
      <h1>{h1}</h1>
      <div className={s.products_container}>
        {products && products
          .filter(el => el.show_product)
          .map(el => <ProductCard key={el.id} {...el} />)}
      </div>
    </div>
  )
}
