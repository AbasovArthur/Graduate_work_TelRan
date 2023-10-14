import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import ProductPrice from '../ProductPrice'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function ProductCard({ id, title, image, description, discont_price, price }) {

  const dispatch = useDispatch()

  return (
    <div className={s.cart_item}>
      <Link to={`/products/${id}`}>
        <div>
          <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
          <div className={s.title_container}>
            <ProductPrice price={price} discont_price={discont_price} />
            <p className={s.title}>{title}</p>
          </div>
        </div>
      </Link>
      
      <div
        className={s.add_btn}
        onClick={() => dispatch(addToCartAction({ id, title, image, description, discont_price, price }))}
      >
        Add to cart
      </div>

    </div>
  )
}
