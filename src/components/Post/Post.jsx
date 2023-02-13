import React from "react";
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.userPic} src="https://www.svgrepo.com/show/68704/boy.svg" alt="user pic" />
            <p className={s.postText}>
                {props.message}
            </p>
            <div className={s.likesWrapper}>
                <p>{props.likeCounter}</p>
                <img className={s.likeIco} src="https://icons-for-free.com/iconfiles/png/512/instagram+like+notification+icon-1320184017391732020.png" alt="likeico" />
            </div>
        </div>
    )
}

export default Post