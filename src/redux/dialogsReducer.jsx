const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: state.messageObj.length + "messageObj",
                message: state.newMessageText,
              };
            state.messageObj.push(newMessage);
            state.newMessageText = "";
            return state
        
        case NEW_MESSAGE_TEXT_UPDATE:
            state.newMessageText = action.text;
            
            return state

        default: return state
    }   
}

const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const NEW_MESSAGE_TEXT_UPDATE = "NEW-MESSAGE-TEXT-UPDATE";

export const addMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};
export const onMessageChangeActionCreator = (text) => {
  return { type: NEW_MESSAGE_TEXT_UPDATE, text: text };
};

export default dialogsReducer