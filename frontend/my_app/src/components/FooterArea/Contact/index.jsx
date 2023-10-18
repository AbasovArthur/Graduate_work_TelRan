import React from 'react'
import s from './style.module.css'
import { RxInstagramLogo } from 'react-icons/rx'
import { PiWhatsappLogoLight } from 'react-icons/pi'

export default function Contact({h2}) {
    return (
        <div className={s.container}>
            <h2>{h2}</h2>
            <p className={s.tel_number}><span>+49 999 999 99 99</span></p>

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
    )
}
