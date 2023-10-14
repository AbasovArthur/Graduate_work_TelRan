import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductPrice from '../../components/ProductPrice';

export default function SingleProductPage() {

  const { id } = useParams();

  const single_product_state = useSelector( state => state.allProducts )

  // console.log(single_product_state);

  const product = single_product_state[id -1]

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

  return (
    <div>
    <h3 className={s.title}>{title}</h3>
    <div className={s.container_card}>
      {image &&
        <img className={s.img} src={`http://localhost:3333${image}`} alt={title} />
      }
      <div className={s.card_descr}>

          <ProductPrice price={price} discont_price={discont_price} style_single_page='style_single_page'/>

        <div className={s.title_descr}>
          <p>Description</p>
          <p>{description}</p>
        </div>

      </div>

    </div>
  </div>
  )
}


