//frontend\app\src\components\FormUI\ModalWindow\index.jsx
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"

import s from './style.module.css'

export default function ModalWindow(props) {

    const [isVisible, setIsVisible] = useState(false)

    const openModal = () => {
        setIsVisible(true)
    };

    const closeModal = () => {
        setIsVisible(false)
    };

    useEffect(() => {
        if (props.onInitiate) {
            openModal();
        }
    }, [props.onInitiate]);

    if (!isVisible) {
        return null
    }

    return (
        <div className={s.modal_overlay}>
            <div className={s.modal_window}>
                <p>{props.title_modalWindow}</p>
                <RxCross2 className={s.close_btn} onClick={closeModal} />
            </div>
        </div>
    )
}

