import React from 'react'
import s from './style.module.css'
import img from '../../media/404.jpg'


export default function NotFoundPage() {
  return (
    <div>
      <img src={img} alt="not found page" className={s.img} />
    </div>
  )
}
