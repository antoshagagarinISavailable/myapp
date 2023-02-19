const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const NEW_MESSAGE_TEXT_UPDATE = "NEW-MESSAGE-TEXT-UPDATE";

let initialState = {
  newMessageText: "",

  dataObj: [
    { id: "0dataObj", name: "Tony" },
    { id: "1dataObj", name: "Alexa" },
    { id: "2dataObj", name: "John Doe" },
    { id: "3dataObj", name: "Bill" },
    { id: "4dataObj", name: "Elon" },
    { id: "5dataObj", name: "Joseph" },
    { id: "6dataObj", name: "Heather" },
  ],

  messageObj: [
    { id: "0messageObj", message: "How's it going?" },
    { id: "1messageObj", message: "Long time no see" },
    { id: "2messageObj", message: "I'm gonna go to the groccery" },
    { id: "3messageObj", message: "Do I know you?" },
    { id: "4messageObj", message: "How to learn React?" },
    { id: "5messageObj", message: "Hi!" },
    { id: "6messageObj", message: "I'm on my way" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messageObj: [
          ...state.messageObj,
          {
            id: state.messageObj.length + "messageObj",
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      };

    case NEW_MESSAGE_TEXT_UPDATE:
      return { ...state, newMessageText: action.text };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};
export const onMessageChangeActionCreator = (text) => {
  return { type: NEW_MESSAGE_TEXT_UPDATE, text: text };
};
export default dialogsReducer;
