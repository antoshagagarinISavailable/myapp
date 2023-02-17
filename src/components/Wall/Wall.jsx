import React from "react";
import s from './wall.module.css'
import Post from '../Post/Post.jsx'
import {addPostActionCreator, onPostChangeActionCreator} from '../../redux/wallReducer'


const Wall = (props) => {
    
    let posts = props.state.postsData.map(el => 
    <Post key={el.id} message={el.message} 
    likeCounter={el.likeCounter}/>)
    
    let myref = React.createRef()


    const addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    const onPostChange = () => {
        let text = myref.current.value
        let action = onPostChangeActionCreator(text)
        props.dispatch(action)
    }
    return (
        

        <div className={s.wrapper}>

            <h3>{props.userName}'s wall:</h3>

            <div className={s.createNewPost}>
                <img className={s.userPic} 
                src="https://www.svgrepo.com/show/68704/boy.svg" 
                alt="user pic" 
                />
                
                <textarea 
                 value={props.state.newPostText}
                 onChange={onPostChange}
                 ref={myref}
                 className={s.createNewPostTextarea}
                 id="3"
                /> 

                <button  onClick={addPost} 
                className={s.publishButton}>
                    Post
                </button>
               
            </div>

            {posts}
            
        </div>
    )
}


export default Wall