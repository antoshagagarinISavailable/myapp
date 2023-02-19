import React from "react";
import s from "./wall.module.css";
import Post from "../Post/Post.jsx";

const Wall = (props) => {
  let posts = props.wall.postsData.map((el) => (
    <Post key={el.id} message={el.message} likeCounter={el.likeCounter} />
  ));

  let myref = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = myref.current.value;
    props.PostChange(text);
  };
  return (
    <div className={s.wrapper}>
      <h3>wall:</h3>

      <div className={s.createNewPost}>
        <img
          className={s.userPic}
          src="https://www.svgrepo.com/show/68704/boy.svg"
          alt="user pic"
        />

        <textarea
          value={props.wall.newPostText}
          onChange={onPostChange}
          ref={myref}
          className={s.createNewPostTextarea}
          id="3"
        />

        <button onClick={onAddPost} className={s.publishButton}>
          Post
        </button>
      </div>

      {posts}
    </div>
  );
};

export default Wall;
