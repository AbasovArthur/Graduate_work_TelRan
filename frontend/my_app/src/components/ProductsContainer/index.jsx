import React from 'react'
import s from './style.module.css'
import ProductCard from '../ProductCard'
import { Link } from 'react-router-dom'

export default function ProductsContainer({ products, h1,  }) {

  return (
    <div className={s.container}>
      <Link to='/products'>
        <h1>{h1}</h1>
      </Link>
      <div className={s.products_container}>
        {products && products
          .filter(el => el.show_product)
          .map(el => <ProductCard key={el.id} {...el} />)}
      </div>
    </div>
  )
}
