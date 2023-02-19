import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    messageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
