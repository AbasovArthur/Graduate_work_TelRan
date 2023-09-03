import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../media/logo.png'
import cart from '../../media/shopping_bag.svg'
import s from './style.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_head}>

      <img className={s.logo} src={logo} alt="logo Garten" />

      <Link to='/categories'>
        <button>Catalog</button>
      </Link>

      <div className={s.nav_page}>
        <Link to='/' >Main</Link>
        <Link to='/products' >Products</Link>
        <Link to='/sale'>Sale</Link>
        <Link to='/sale'>Contact</Link>
      </div>

      <img className={s.cart} src={cart} alt="Cart" />
      
    </div>
  )
}
