import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { filterProductsAction } from '../../../../store/reducers/allProductsReducer';

export default function FilterForm() {

  const dispatch = useDispatch()

  const submit = e => {
      e.preventDefault()
      const { min, max } = e.target;
      const min_value = min.value || 0;
      const max_value = max.value || Infinity;
      dispatch(filterProductsAction({min_value, max_value}))
      e.target.reset()
  }

  return (
    <form className={s.filter_form} onSubmit={submit}>
      <button>Price</button>
      <input type='number' placeholder='from' name='min' />
      <input type='number' placeholder='to' name='max' />
    </form>
  )
}
