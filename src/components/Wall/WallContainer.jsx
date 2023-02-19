import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../redux/wallReducer";

import Wall from "./Wall.jsx";

let mapStateToProps = (state) => {
  return {
    wall: state.wall,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    PostChange: (text) => {
      dispatch(onPostChangeActionCreator(text));
    },
  };
};

let WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default WallContainer;
