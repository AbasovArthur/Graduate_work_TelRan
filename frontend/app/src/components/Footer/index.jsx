import React from 'react'
import s from './style.module.css'
import { RxInstagramLogo } from 'react-icons/rx'
import { PiWhatsappLogoLight } from 'react-icons/pi'


export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.contact}>

        <h2>Contact</h2>
        <p><span>+49 999 999 99 99</span></p>

        <div className={s.social_media}>

          <div className={s.instagram}>
            <RxInstagramLogo className={s.icon} />
            <p>instagram</p>
          </div>
          <div className={s.whats_app}>
            <PiWhatsappLogoLight className={s.icon} />
            <p>WhatsApp</p>
          </div>
        </div>

      </div>
      <div className={s.address}>
        <h2>Address</h2>
        <h2>
          <a href="https://www.google.com/search?q=telranDE">
            <span>Linkstraße 2, 8 OG, 10785,</span>
            <span>Berlin, Deutschland</span>
          </a>
        </h2>
        <div className={s.work_hours}>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
        </div>
      </div>

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
