import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decremProdAction, deleteFromCardAction, incremProdAction } from '../../store/redusers/cartReducer'

export default function CartItem({ count, id, title, image, description, discont_price, price }) {

    const dispatch = useDispatch()
    const cart_state = useSelector(state => state.cart)


    const total = cart_state.reduce((acc, { price, count }) => acc + price * count, 0);

    return (
        <div className={s.container}>
            <div className={s.products}>
                <img src={`http://localhost:3333${image}`} alt={title} />

                <div className={s.products_descr}>
                    <p>{title}</p>
                    <div className={s.count}>
                        <button onClick={() => dispatch(incremProdAction(id))}>+</button>
                        <p>{count}</p>
                        <button onClick={() => dispatch(decremProdAction(id))}>-</button>
                    </div>

                </div>
                <p>{price * count}$</p>

                <div className={s.price}>
                    <h2>{price}$</h2>
                    {discont_price ?
                        <p className={s.discont}>{Math.floor(price - price * discont_price / 100)}$</p> : ''}
                    {discont_price ?
                        <p className={s.prozent}>-{discont_price}%</p> : ''}
                </div>

                <span onClick={() => dispatch(deleteFromCardAction(id))}>X</span>
            </div>
            <div className={s.details}>
                <p>Total price</p>
                <p>{total}</p>
            </div>
        </div>
    )
}
