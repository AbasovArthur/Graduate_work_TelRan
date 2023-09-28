import React from 'react'
import s from './style.module.css'
import DiscountProductForm from '../DiscountProductForm'
import FilterForm from '../FilterForm'
import SortForm from '../SortForm'

export default function DiscFiltrSortForm({discount_show}) {
  return (
    <div className={s.filter_forms}>
      { discount_show ? <DiscountProductForm /> : '' }
        {/* <DiscountProductForm /> */}
        <FilterForm />
        <SortForm />
    </div>
  )
}
