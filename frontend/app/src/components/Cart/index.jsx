import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './style.module.css'
import { clearCartAction } from '../../store/redusers/cartReducer';


export default function Cart({ h1 }) {

    const cart_state = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const total = cart_state.reduce((acc, { price, count }) => acc + price * count, 0).toFixed(2).toString().split('.');

    return (
        <div>
            <h1>{h1}</h1>
            <div className={s.container}>

                {cart_state.length === 0
                    ? (<p>Корзина пуста, товаров нет</p>)
                    : (<>
                        <div className={s.container_cart}>
                            {cart_state.map(el =>
                                <CartItem key={el.id} {...el} />)}
                        </div>
                    </>)
                }
                <div className={s.details}>
                    <h3>Order details</h3>
                    <div className={s.total_price}>
                        <p>Total price</p>
                        <p>
                            <span>{total[0]}</span>
                            <span>.{total[1]}</span>
                            <span> $</span>
                        </p>
                    </div>
                    <form className={s.details_form}>
                        <input type='number' placeholder='Phone number' />
                        <button>Order</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

/* 
!!! Очистить корзину:

<div
    className={s.clear_btn}
    onClick={()=>dispatch(clearCartAction())}
>
    Clear cart
</div> 

*/



