import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'login/SET_USER_DATA';
const LOGOUT = 'LOGOUT';

let initialState = {
    username: null,
    role: null,
    userId: null,
    isAuth: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, username: action.username, userId: action.userId, isAuth: true
            }
        case LOGOUT:
            return {
                ...state, username: null, isAuth: false
            }

        default:
            return state;
    }
}

export let setUsername = (username, userId) => ({type: SET_USER_DATA, username, userId});
export let logout = () => ({type: LOGOUT});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.checkAuth().then(response => {
        console.log('Успешно:' + response.username);
        dispatch(setUsername(response.username, response.userId));
    }).catch( () => {
        console.log('Ошибка авторизации.')
    });
}

export const loginUser = (username, password) => (dispatch) => {
    authAPI.authLogin(username, password).then(response => {
        console.log('Login ok');
        const tokenName = 'accessToken'
        sessionStorage.setItem(tokenName, response.access_token)
        dispatch(setUsername(response.username, response.userId));
    }).catch((response) => {
        let action = stopSubmit("login", {_error: "Ошибка логина или пароля"});
        dispatch(action)
    })
}

export default loginReducer;