import React from "react";
import s from "./user.module.css";

const User = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userpicWrapper}>
        <img
          className={s.userPic}
          src="https://www.svgrepo.com/show/68704/boy.svg"
          alt="user pic"
        />

        {(() =>
          props.isFollowed ? (
            <button
              className={s.button}
              onClick={() => props.unfollow(props.id)}
            >
              Unfollow
            </button>
          ) : (
            <button className={s.button} onClick={() => props.follow(props.id)}>
              Follow
            </button>
          ))()}
      </div>
      <p className={s.postText}>{props.name}</p>
    </div>
  );
};

export default User;
