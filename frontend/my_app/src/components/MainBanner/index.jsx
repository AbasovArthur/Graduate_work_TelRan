import React from 'react'
import s from './style.module.css'
import img from '../../media/kisspng_garden.png'
import { Link } from 'react-router-dom'
import FormButton from '../UI/FormUI/FormButton'

export default function MainBanner() {
    return (
        <div className={s.banner}>
            <div className={s.offer}>
                <h1>
                    <span>Sale</span>
                    <span>New season</span>
                </h1>
                <Link to='/sale'>
                    <FormButton btn_style_item='btn_for_mainBanner'>Sale</FormButton>
                </Link>
            </div>
            <img className={s.img} src={img} alt="Garten" />
        </div>
    )
}
