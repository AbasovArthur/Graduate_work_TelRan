//frontend\app\src\components\FormItem\index.jsx
import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './style.module.css'

export default function FormItem(props) {
  return (
    <div className={[s.form_item, s[props.style]].join(' ')}>
        <FormInput
            type='number'
            placeholder='+49'
            name='mob_number'
            style_for_card='for_card'
        />
        <FormButton style_item='for_card'>Get a discount</FormButton>
    </div>
  )
}
