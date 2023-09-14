import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decremProdAction, deleteFromCardAction, incremProdAction } from '../../store/redusers/cartReducer'
import { RxCross2 } from "react-icons/rx"

export default function CartItem({ count, id, title, image, description, discont_price, price }) {

    const dispatch = useDispatch()
    const price_fix = (price * count).toFixed(2).toString().split('.')

    return (
        <div className={s.container}>
            <div className={s.products}>
                <img src={`http://localhost:3333${image}`} alt={title} />

                <div className={s.products_descr}>
                    
                    <h3>{title}</h3>

                    <div className={s.count}>
                        <div onClick={() => dispatch(decremProdAction(id))}>-</div>
                        <p>{count}</p>
                        <div onClick={() => dispatch(incremProdAction(id))}>+</div>
                    </div>

                </div>

                <div className={s.price}>

                    <h2>
                        <span>{price_fix[0]}</span>
                        <span>.{price_fix[1]}</span>
                        <span> $</span>
                    </h2>

                    {discont_price ?
                        <p className={s.discont}>{Math.floor(price - price * discont_price / 100)}$</p> : ''}
                </div>

                <span onClick={() => dispatch(deleteFromCardAction(id))}>
                    <RxCross2/>
                </span>
            </div>
            
        </div>
    )
}
