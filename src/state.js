let observer = () => {};

const storage = {
  data: {
    wall: {
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
    },

    dialog: {
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
    },
  },

  subscribe(f) {
    observer = f;
  },

  addPost(el) {
    let newPost = {
      id: this.data.wall.postsData.length + "postsData",
      message: el.current.value,
      likeCounter: 0,
    };
    this.data.wall.postsData.push(newPost);

    this.data.wall.newPostText = "";

    observer();
  },

  newPostTextUpdate(event) {
    console.log(event.target.value);
    this.data.wall.newPostText = event.target.value;
    observer();
  },
};

window.storage = storage;

export default storage;
