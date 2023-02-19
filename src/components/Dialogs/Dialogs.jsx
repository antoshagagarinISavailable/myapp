import React from "react";
import s from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.dataObj.map((el) => (
    <NavLink
      className={s.interlocutor}
      to={"/dialogs" + el.id}
      id={el.id}
      key={el.id}
    >
      {el.name}
    </NavLink>
  ));
  let dialogMessages = props.dialogs.messageObj.map((el) => (
    <div className={s.messages} id={el.id} key={el.id} message={el.message}>
      {el.message}
    </div>
  ));

  let myref = React.createRef();

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    let text = myref.current.value;
    props.messageChange(text);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.dialogItems}>{dialogsElements}</div>

      <div className={s.dialogHistory}>{dialogMessages}</div>

      <div className={s.createNewMessage}>
        <img
          className={s.userPic}
          src="https://www.svgrepo.com/show/68704/boy.svg"
          alt="user pic"
        />

        <textarea
          value={props.dialogs.newMessageText}
          onChange={onMessageChange}
          ref={myref}
          className={s.createNewPostTextarea}
          id="3"
        />

        <button onClick={onAddMessage} className={s.publishButton}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
