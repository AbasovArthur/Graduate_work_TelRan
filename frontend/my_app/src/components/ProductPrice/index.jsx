import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'

export default function ProductPrice({ price, discont_price }) {


    return (
        <div className={s.price}>
            {discont_price ?
                <>
                    <h2>{discont_price}$</h2>
                    <p className={s.discont}>{price}$</p>
                    <p className={s.prozent}>-{Math.floor(((price - discont_price) / price) * 100)}%</p>
                </>
                :
                <h2>{price}$</h2>
            }
        </div>
    )
}

