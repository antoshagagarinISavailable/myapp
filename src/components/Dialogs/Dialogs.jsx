import React from "react";
import s from './dialogs.module.css'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/dialogsReducer'




const Dialogs = (props) => {

    let dialogsElements = props.state.dataObj
    .map(el =>  <NavLink className={s.interlocutor} to={'/dialogs' + el.id} id={el.id} key={el.id}>{el.name}</NavLink>)
    let dialogMessages = props.state.messageObj
    .map(el => <div className={s.messages} id={el.id} key={el.id} message={el.message}>{el.message}</div>)

    let myref = React.createRef()

    const addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)
    }

    const onMessageChange = (e) => {   
     
        let text = myref.current.value
        let action = onMessageChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.wrapper}>
            
            <div className={s.dialogItems}>

                {dialogsElements}

            </div>

            
            <div className={s.dialogHistory}>
                
                {dialogMessages}

            </div>

            <div className={s.createNewMessage}>
                <img className={s.userPic} 
                src="https://www.svgrepo.com/show/68704/boy.svg" 
                alt="user pic" 
                />
                
                <textarea 
                 value={props.state.newMessageText}
                 onChange={onMessageChange}
                 ref={myref}
                 className={s.createNewPostTextarea}
                 id="3"
                /> 

                <button  onClick={addMessage} 
                className={s.publishButton}>
                    Post
                </button>
               
            </div>
            
        </div>
    )
}

export default Dialogs