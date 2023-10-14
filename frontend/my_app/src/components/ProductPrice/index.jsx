import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'

export default function ProductPrice({ price, discont_price, style_single_page  }) {

    // const style_price = () => {
    //     [s.price, style_single_page].join(' ')
    // }
    console.log("Received style:", style_single_page);

    return (
        // <div className={style_price}>
        <div className={[s.price, s[style_single_page]].join(' ')}>
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

