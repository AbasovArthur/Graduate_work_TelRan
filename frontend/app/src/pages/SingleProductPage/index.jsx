import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../requests/products_req';
import s from './style.module.css'
import { addToCartAction } from '../../store/redusers/cartReducer';


export default function SingleProductPage() {

  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => dispatch(getSingleProduct(id)), [id])

  const single_product_state = useSelector(state => state.singleProduct)

  // Getting [0] element of the array - [singleProduct]:
  const product = single_product_state[0]

  const {
    title,
    image,
    price,
    discont_price,
    description,
    updatedAt,
    categoryId,
    createdAt
  } = product || {};

  // console.log(image);


  return (
    <div>
      <h3 className={s.title}>{title}</h3>
      <div className={s.container_card}>
        {image &&
          <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
        }
        <div className={s.card_descr}>

          <div className={s.price}>
            <h2 className={s.h2}>{price}<span>$</span></h2>
            {discont_price ? <p className={s.discont}>{Math.floor(price - price * discont_price / 100)}$</p> : ''}
            {discont_price ? <p className={s.prozent}>-{discont_price}%</p> : ''}
          </div>

          <div
            onClick={() => dispatch(addToCartAction({ id, title, image, description, discont_price, price }))}
            className={s.button}
          >
            To card</div>

          <div className={s.title_descr}>
            <p>Description</p>
            <p>{description}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

