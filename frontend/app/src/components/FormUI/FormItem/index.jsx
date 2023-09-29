//frontend\app\src\components\FormItem\index.jsx
import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './style.module.css'

export default function FormItem(props) {

  return (
    <div className={[s.form_item, s[props.style_item]].join(' ')}>
      <FormInput
        type='number'
        placeholder='+49'
        name='mob_number'
        style_item={props.input_style_item}
      />
      <FormButton btn_style_item={props.btn_style_item}>{props.title_btn}</FormButton>
    </div>
  )
}
