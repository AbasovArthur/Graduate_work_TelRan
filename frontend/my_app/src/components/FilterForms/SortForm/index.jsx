import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { sortProductAction } from '../../../store/reducers/allProductsReducer'

export default function SortForm() {

    const dispatch = useDispatch()

    const order = e => {
        dispatch(sortProductAction(e.target.value))
    }

    return (
        <div>
            <label className={s.sort_form}>
                <p>Sorted </p>
                <select onInput={order} defaultValue='price_asc' >
                    <option value='dafault'>By Default</option>
                    <option value='title'>Alphabetically A-Z</option>
                    <option value='price_asc'>Price: Low to High</option>
                    <option value='price_desk'>Price: High to Low</option>
                </select>
            </label>
        </div>
    )
}

