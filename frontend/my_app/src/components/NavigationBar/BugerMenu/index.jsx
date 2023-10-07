import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { linksNaw } from './linkNav'
import { FcMenu } from 'react-icons/fc'
import s from './style.module.css'

export default function BugerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const hendleActivMenu = () => {
      setIsOpen(!isOpen)
    };

    return (
        <div>
            <FcMenu className={s.icon} onClick={hendleActivMenu} />

            <div className={[s.link, isOpen ? s.active : ''].join(' ')}>

                {linksNaw.map(({ id, link, title }) =>
                    <Link to={link} key={id}>
                        {title}
                    </Link>)}
            </div>
        </div>
    )
}
