import React from 'react'
import s from './style.module.css'

export default function FormInput(props) {
  // console.log(props);
  return (
    <input {...props} className={[s.input, s[props.style_item]].join(' ')}/>
  )
}
