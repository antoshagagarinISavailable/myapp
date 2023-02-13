import React from "react";
import s from './main.module.css'

const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <article>Here/'s some article one text</article>
            <article>Here/'s some article two text</article>
            <article>Here/'s some article three text</article>
            <article>Here/'s some article four text</article>
            <article>Here/'s some article five text</article>
        </div>
    )
}

export default Main