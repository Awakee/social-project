import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} likeCounter={p.likeCount}/>))
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.wall}>
            <h3>Стена:</h3>
            <div className={classes.comment}>
          <textarea name="" id="" cols="85" rows="1"
                    className={classes}
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
          />
                <a onClick={onAddPost} className={classes.buttonPost}>Add</a>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;