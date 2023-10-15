import React from 'react'
import logo from '../../../media/logo.png'
import { PiHandbagLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import BugerMenu from '../BugerMenu'
import FormButton from '../../UI/FormUI/FormButton'

export default function NavMenu() {

  return (
    <nav className={s.nav_head}>

      <div className={s.logo}>
        <Link to={'/'}>
          <img src={logo} alt="logo Garten" />
        </Link>
      </div>

      <div className={s.button} >
        <Link to={'/categories'}>
          <FormButton btn_style_item='btn_for_nawbar'>categories</FormButton>
        </Link>
      </div>

      <BugerMenu className={s.navmenu} />

      <div className={s.cart}>
        <Link to='/cart'>
          <PiHandbagLight />
        </Link>
      </div >

    </nav>
  )
}

