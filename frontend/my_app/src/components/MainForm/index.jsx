//frontend\app\src\components\MainForm\index.jsx
import React from 'react'
import img from '../../media/gnome.png'
import s from './style.module.css'
import { salePhoneNum } from '../../requests/products_req'
import FormItem from '../UI/FormUI/FormItem'

export default function MainForm() {
    return (
        <div className={s.form}>
            <img src={img} alt="gnome" />
            <div className={s.form_offer}>
                <h1>
                    <span>5% off</span>
                    <span>on the first order</span>
                </h1>
                <FormItem 
                    input_style_item='input_for_main' 
                    title_btn='Get a discount' 
                    onSubmit={salePhoneNum}
                    title_modalWindow='you will get a 5% discount'
                />
            </div>
        </div>
    )
}
