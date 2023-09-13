import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/redusers/cartReducer'


export default function ProductCard({ id, title, image, description, discont_price, price, createdAt, updatedAt }) {

  const dispatch = useDispatch()

  return (
    <div className={s.cart_item}>
      <Link to={`/products/${id}`}>
        <div>
          <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
          <div className={s.title_container}>
            <div className={s.price}>
              <h2>{price}$</h2>
              {discont_price ?
                <p className={s.discont}>{Math.floor(price - price * discont_price / 100)}$</p> : ''}
              {discont_price ?
                <p className={s.prozent}>-{discont_price}%</p> : ''}
            </div>
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

/*
        <div className={s.price}>
          <h2>{price}$</h2>
          <p className={s.discont}>{discont_price}</p>
          <p className={s.prozent}>-{discont_price}%</p>
        </div>

*/