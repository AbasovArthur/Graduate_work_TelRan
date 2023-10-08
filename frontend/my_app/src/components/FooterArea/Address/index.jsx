import React from 'react'
import s from './style.module.css'

export default function Address({h2}) {
    return (
        <div>
            <h2>{h2}</h2>
            <h2>
                <a
                className={s.link}
                 href="https://www.google.com/search?q=telranDE">
                    <span>Linkstraße 2, 8 OG, 10785,</span>
                    <span>Berlin, Deutschland</span>
                </a>
            </h2>
            <div className={s.work_hours}>
                <p>Working Hours:</p>
                <p>24 hours a day</p>
            </div>
        </div>
    )
}
