import React from 'react'
import ProductCard from '../ProductCard'
import s from './style.module.css'

export default function ProductsContainer({ products }) {
    return (
        <div className={s.categories}>
            {products && products.map(el => <ProductCard key={el.id} {...el} />)}
        </div>
    )
}
