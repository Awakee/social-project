import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <p>{props.message}</p>
      <span className={classes.like}>{`${props.likeCounter}`}<i className="far fa-heart"></i></span>
    </div>
  )
}

export default Post;