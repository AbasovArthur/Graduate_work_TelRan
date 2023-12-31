import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDiscountPropuctsAction } from '../../../store/redusers/allProductsReduser'
import s from './style.module.css'
import { getDiscountProdByCategorieAction } from '../../../store/redusers/productsByCategoriesReducer'


export default function DiscountProductForm() {

  const dicpatch = useDispatch()

  const [checkDiscount, setCheckDiscount] = useState(false)

  const handelChange = () => setCheckDiscount(!checkDiscount)

  // const get_products = e => dicpatch(getDiscountPropuctsAction(e.target.checked))
  
  const get_products = e => {
    dicpatch(getDiscountPropuctsAction(e.target.checked))
    dicpatch(getDiscountProdByCategorieAction(e.target.checked))
  }


  // console.log(get_products);

  return (
    <div>
      <label className={s.discount}>
        <p>Discounted items</p>
        {/* <span>{checkDiscount ? '✔' : '✖'}</span> */}

        <label
          className={checkDiscount ? `${s.toggler} ${s.active}` : s.toggler}
          htmlFor='checkbox'
        >
          <input
            type='checkbox'
            id='checkbox'
            checked={checkDiscount}
            onChange={handelChange}
            onClick={get_products}
          />
          <span className={s.ball}>
            {/* {checkDiscount ? '✔' : ''} */}
            {''}
          </span>
        </label>

      </label>
    </div>
  )

}
