import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDiscountPropuctsAction } from '../../../store/redusers/allProductsReduser'

export default function DiscountProductForm() {

    const dicpatch = useDispatch()

    const [checkDiscount, setCheckDiscount] = useState(false)

    const handelChange = () => setCheckDiscount(!checkDiscount)

    const get_products = e => dicpatch(getDiscountPropuctsAction(e.target.checked))

  return (
    <div>
        <label>
            <p>Discounted items</p>
            <input type='checkbox' checked={checkDiscount} onChange={handelChange} onClick={get_products}/>
        </label>
    </div>
  )
}
