import React from "react";
import s from "./users.module.css";
import User from "./User";

const Users = (props) => {
  let users = props.users.users.map((el) => (
    <User
      key={el.id}
      id={el.id}
      name={el.name}
      isFollowed={el.isFollowed}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return (
    <div className={s.wrapper}>
      <h3>users:</h3>
      {users}
    </div>
  );
};

export default Users;
