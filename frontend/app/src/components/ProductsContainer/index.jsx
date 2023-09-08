import React from 'react'
import ProductCard from '../ProductCard'
import s from './style.module.css'

export default function ProductsContainer({ products, h1 }) {

    // console.log(products);

    return (
        <div className={s.container}>
            <h1>{h1}</h1>
            <div className={s.products_container}>
                {products && products.map(el => <ProductCard key={el.id} {...el} />)}
            </div>
        </div>
    )
}
