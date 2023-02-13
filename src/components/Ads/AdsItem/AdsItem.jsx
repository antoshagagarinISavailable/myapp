import React from "react";
import s from './AdsItem.module.css'

const AdsItem = (props) => {
    return (
        <div className={s.wrapper}>
            <p>{props.text}</p>
        </div>
    )
}

export default AdsItem