import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";

test('New post should be added', () => {
    let action = addPostActionCreator("text-for-test")

    let state = {
        posts: [{id: 0, message: 'Hi, how are you?', likeCount: 12},
            {id: 1, message: 'Hi, im dog', likeCount: 10},
            {id: 2, message: 'Hi, im cat', likeCount: 5}]
    }
    let newState = profileReducer(state, action)

    expect( newState.posts.length ).toBe(4);
});


