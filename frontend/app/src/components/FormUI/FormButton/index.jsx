import React from 'react'
import s from './style.module.css'


export default function FormButton({ children, btn_style_item }) {
  return (
    <button className={[s.button, s[btn_style_item]].join(' ')}>
      { children }
    </button>
  )
}
