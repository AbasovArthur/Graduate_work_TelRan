import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import logo from '../../media/logo.png'
import s from './style.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_head}>
      <Link to='/'>
        <img className={s.logo} src={logo} alt="logo Garten" />
      </Link>

      <Link to='/categories'>
        <button className={s.button}>Catalog</button>
      </Link>

      <div className={s.nav_page}>
        <Link to='/' >Main</Link>
        <Link to='/products' >Products</Link>
        <Link to='/sale'>Sale</Link>
        <Link to='/sale'>Contact</Link>
      </div>
      <Link to='/cart'>
        <HiOutlineShoppingBag className={s.cart}/>
      </Link>

    </div>
  )
}
