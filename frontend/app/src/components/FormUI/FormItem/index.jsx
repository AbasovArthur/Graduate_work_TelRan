import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './style.module.css'
import { useForm } from 'react-hook-form'

export default function FormItem(props) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    // mode: 'onChange'
  });

  const numRegister = register('mob_number', {
    required: '*This field is required',
    pattern: {
      value: /^(?:\+49|0049|0)?\s?\d{2,5}\s?\d{4,8}$/,
      message: "*Oops! That doesn't look like a valid phone number. Please try again."
    }
  })

  const submit = data => {
    console.log(data)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(submit)}>

      <div className={[s.form_item, s[props.style_item]].join(' ')}>
        <FormInput
          type='tel'
          placeholder='+49'
          name='mob_number'
          style_item={props.input_style_item}
          {...numRegister}
          />
          {errors.mob_number && 
            <p className={s.error_msg}>{errors.mob_number.message}</p>}
        <FormButton btn_style_item={props.btn_style_item}>{props.title_btn}</FormButton>
      </div>
    </form>
  )
}
