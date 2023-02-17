const ADD_NEW_POST = "ADD-NEW-POST";
const NEW_POST_TEXT_UPDATE = "NEW-POST-TEXT-UPDATE";

let initialState = {
  newPostText: "",

  postsData: [
    { id: "0postsData", message: "Hi, how are you?", likeCounter: "25" },
    { id: "1postsData", message: "Happy new year!", likeCounter: "4" },
    { id: "2postsData", message: "Please, subscribe me", likeCounter: "8" },
    {
      id: "3postsData",
      message: "take a look on my new photos",
      likeCounter: "1",
    },
    {
      id: "4postsData",
      message: "have you seen my first photo?",
      likeCounter: "12",
    },
    {
      id: "5postsData",
      message: "this is my first post",
      likeCounter: "99",
    },
  ],
}

const wallReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: state.postsData.length + "postsData",
                message: state.newPostText,
                likeCounter: 0,
              };
            state.postsData.unshift(newPost);
            state.newPostText = "";
            return state
        
        case NEW_POST_TEXT_UPDATE:
            state.newPostText = action.text;
            return state

        default: return state
    }   
}



export const addPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};
export const onPostChangeActionCreator = (text) => {
  return { type: NEW_POST_TEXT_UPDATE, text: text };
};
export default wallReducer