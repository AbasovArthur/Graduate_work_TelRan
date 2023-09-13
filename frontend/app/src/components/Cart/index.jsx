import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './style.module.css'
import { clearCartAction } from '../../store/redusers/cartReducer';


export default function Cart({ h1 }) {

    const cart_state = useSelector(state => state.cart)
    const dispatch = useDispatch()
    // console.log(cart_state);

    return (
        <div>
            <h1>{h1}</h1>
            <div className={s.container_cart}>
                {cart_state.map(el =>
                    <CartItem key={el.id} {...el} />)}
            </div>
            <div
                className={s.clear_btn}
                onClick={()=>dispatch(clearCartAction())}
            >
                Clear cart
            </div>
        </div>
    )
}
