import React from "react";
import s from './dialogs.module.css'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";




const Dialogs = (props) => {

    let dialogsElements = props.state.dataObj
    .map(el =>  <NavLink className={s.interlocutor} to={'/dialogs' + el.id} id={el.id} key={el.id}>{el.name}</NavLink>)
    let dialogMessages = props.state.messageObj
    .map(el => <div className={s.messages} id={el.id} key={el.id} message={el.message}>{el.message}</div>)
    
    return (
        <div className={s.wrapper}>
            
            <div className={s.dialogItems}>

                {dialogsElements}

            </div>

            
            <div className={s.dialogHistory}>
                
                {dialogMessages}

            </div>
            
        </div>
    )
}

export default Dialogs