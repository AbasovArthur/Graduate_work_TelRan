import React from 'react'
import ProductCard from '../ProductCard'

export default function ProductsContainer({ products }) {
    return (
        <div>
            {products.map(el => <ProductCard key={el.id} {...el} />)}
        </div>
    )
}
