const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
    messages: [{id: 0, message: 'Yo'},
        {id: 1, message: 'Yoyoyoyoyo'},
        {id: 2, message: 'Wowowowowo'}
    ],
    dialogs: [{id: 1, name: 'Igor'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Albert'}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state, messages: [...state.messages, {id: state.messages.length++, message: action.newMessage}]
            };
        case UPDATE_MESSAGE:
            return {
                ...state, currentMessage: action.newText
            };
        default:
            return state;
    }
}


export const sendMessageActionCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text})

export default dialogsReducer;