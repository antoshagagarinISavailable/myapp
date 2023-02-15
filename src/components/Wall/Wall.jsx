import React from "react";
import s from './wall.module.css'
import Post from '../Post/Post.jsx'






const Wall = (props) => {
    
    let posts = props.state.postsData.map(el => <Post key={el.id} message={el.message} likeCounter={el.likeCounter}/>)
    let myref = React.createRef()

   
    
   

  
    return (
        
        <div className={s.wrapper}>

            <h3>{props.userName}'s wall:</h3>

            <div className={s.createNewPost}>
                <img className={s.userPic} src="https://www.svgrepo.com/show/68704/boy.svg" alt="user pic" />
                
                <textarea 
                 value={props.state.newPostText}
                 onChange={props.newPostTextUpdate}
                 ref={myref}
                 className={s.createNewPostTextarea}
                 id="3"
                /> 

                <button  onClick={() => {props.addPost(myref)}} className={s.publishButton}>Post</button>
               
            </div>

            {posts}
            
        </div>
    )
}


export default Wall