import React from 'react'
import s from './style.module.css'
import img from '../../media/kisspng_garden.png'

export default function MainBanner() {
    return (
        <div className={s.banner}>
            <img className={s.img} src={img} alt="Garten" />
            <div className={s.offer}>
                <h1>
                    <span>Sale</span>
                    <span>New season</span>
                </h1>
                <button className={s.button}>Sale</button>
            </div>
        </div>
    )
}
