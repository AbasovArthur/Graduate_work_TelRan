import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './style.module.css'
// import { clearCartAction } from '../../store/redusers/cartReducer';
import { orderPhoneNum } from '../../requests/products_req';


export default function Cart({ h1 }) {

    const cart_state = useSelector(state => state.cart)

    useEffect(() => {
      localStorage.setItem('shopping_cart', JSON.stringify(cart_state))
    }, [cart_state])

    const dispatch = useDispatch()

    const total = cart_state
        .reduce((acc, { price, count }) => acc + price * count, 0)
        .toFixed(2)
        .toString()
        .split('.');

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

                </div>

            </div>
        </div>
    )
}




