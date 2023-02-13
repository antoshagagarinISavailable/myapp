import React from "react";
import  s from './wall.module.css'
import Post from '../Post/Post.jsx'
import { addPost } from "../../state";





const Wall = (props) => {
    
    let posts = props.state.postsData.map(el => <Post key={el.id} message={el.message} likeCounter={el.likeCounter}/>)
    let myref = React.createRef()

  
    return (
        <div className={s.wrapper}>

            <h3>{props.userName}'s wall:</h3>

            <div className={s.createNewPost}>
                <img className={s.userPic} src="https://www.svgrepo.com/show/68704/boy.svg" alt="user pic" />
                <textarea ref={myref} className={s.createNewPostTextarea} name="newPost" id="3"  placeholder="What's new?"></textarea>
                <button  onClick={() => {addPost(myref)}} className={s.publishButton}>Post</button>
               
            </div>

            {posts}
            
        </div>
    )
}

export default Wall