import React, { useEffect } from 'react'
import { BsCartX } from 'react-icons/bs'

import { useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './style.module.css'
// import { clearCartAction } from '../../store/redusers/cartReducer';
import FormItem from '../UI/FormUI/FormItem';
import { orderPhoneNum } from '../../requests/products_req';
import { Link } from 'react-router-dom';


export default function Cart({ h1 }) {

    const cart_state = useSelector(state => state.cart)

    const total = cart_state
        .reduce((acc, { price, count }) => acc + price * count, 0)
        .toFixed(2)
        .toString()
        .split('.');

    return (
        <div className={s.item}>
            <h1>{h1}</h1>
            <div className={s.container}>
                <div className={s.shopping_card}>
                    {cart_state.length === 0
                        ? (
                            <Link to={'/products'}>
                                <div className={s.cart_empty}>
                                    <BsCartX />
                                    <p>Корзина пуста, товаров нет</p>
                                </div>
                            </Link>
                        )
                        : (<>
                            <div className={s.container_cart}>
                                {cart_state.map(el =>
                                    <CartItem key={el.id} {...el} />)}
                            </div>
                        </>)
                    }
                </div>

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

                    <FormItem
                        input_style_item='input_for_cart'
                        btn_style_item='btn_for_card'
                        title_btn='Order'
                        onSubmit={orderPhoneNum}
                        title_modalWindow='order product'
                    />

                </div>

            </div>
        </div>
    )
}




