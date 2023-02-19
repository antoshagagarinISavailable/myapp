import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";

import Users from "./Users.jsx";

let mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
