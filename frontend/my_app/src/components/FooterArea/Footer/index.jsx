import React from 'react'
import s from './style.module.css'
import Address from '../Address'
import Contact from '../Contact'


export default function Footer() {
  return (
    <div className={s.footer}>
      <Contact h2='Contact'className={s.contact}/>
      <Address h2='Address'className={s.address}/>

      <div className={s.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.402683339232!2d13.372396477620809!3d52.508051237112966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1695403201082!5m2!1sru!2sde"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  )
}
