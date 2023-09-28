//frontend\app\src\components\FormButton\index.jsx
import React from 'react'
import s from './style.module.css'


export default function FormButton({ children, style_item }) {
  return (
    <button className={[s.button, s[style_item]].join(' ')}>
      { children }
    </button>
  )
}
