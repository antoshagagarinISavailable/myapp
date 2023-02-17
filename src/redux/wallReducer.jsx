const wallReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: state.postsData.length + "postsData",
                message: state.newPostText,
                likeCounter: 0,
              };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state
        
        case NEW_POST_TEXT_UPDATE:
            state.newPostText = action.text;
            return state

        default: return state
    }   
}

const ADD_NEW_POST = "ADD-NEW-POST";
const NEW_POST_TEXT_UPDATE = "NEW-POST-TEXT-UPDATE";

export const addPostActionCreator = () => {
  return { type: "ADD-NEW-POST" };
};
export const onPostChangeActionCreator = (text) => {
  return { type: "NEW-POST-TEXT-UPDATE", text: text };
};

export default wallReducer