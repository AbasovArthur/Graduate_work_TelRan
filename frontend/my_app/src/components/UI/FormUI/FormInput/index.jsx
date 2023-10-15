import React, { forwardRef } from 'react'
import s from './style.module.css'

const FormInput = forwardRef((props, ref) => {

  return (
    <input {...props}
      className={[s.input, s[props.style_item]].join(' ')}
      ref={ref}
    />
  )
})

export default FormInput;