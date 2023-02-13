import React from "react";
import s from './ads.module.css';
import AdsItem from './AdsItem/AdsItem.jsx'

const Ads = () => {
    return (
        <div className={s.wrapper}>
            <AdsItem text='Здесь будет реклама'/>
            <AdsItem text='Здесь будет реклама'/>
            <AdsItem text='Здесь будет реклама'/>
            <AdsItem text='Здесь будет реклама'/>
            <AdsItem text='Здесь будет реклама'/>
            <AdsItem text='Здесь будет реклама'/>
        </div>
    )
}

export default Ads