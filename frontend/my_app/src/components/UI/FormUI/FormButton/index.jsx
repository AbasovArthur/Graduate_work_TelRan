import React from 'react'
import s from './style.module.css'


          <FormButton title_btn='categories'/>
export default function FormButton({ children, btn_style_item }) {
  return (
    <button className={[s.button, s[btn_style_item]].join(' ')}>
      { children }
    </button>
  )
}
