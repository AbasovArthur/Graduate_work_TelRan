//frontend\app\src\components\MainForm\index.jsx
import React from 'react'
import img from '../../media/gnome.png'
import s from './style.module.css'
import FormItem from '../FormItem'

export default function MainForm() {
    return (
        <div className={s.form}>
            <img src={img} alt="gnome" />
            <div className={s.form_offer}>
                <h1>
                    <span>5% off</span>
                    <span>on the first order</span>
                </h1>
                <FormItem />
            </div>
        </div>
    )
}
