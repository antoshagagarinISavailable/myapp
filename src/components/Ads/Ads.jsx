import React from "react";
import s from './ads.module.css';
import AdsItem from './AdsItem/AdsItem.jsx'

const Ads = () => {
    return (
        <div className={s.wrapper}>
            <AdsItem text='ads will be here ads will be here ads will be here'/>
            <AdsItem text='ads will be here ads will be here ads will be here'/>
            <AdsItem text='ads will be here ads will be here ads will be here'/>
        </div>
    )
}

export default Ads