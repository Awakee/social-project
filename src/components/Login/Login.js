import React from 'react';
import {reduxForm} from "redux-form";
import {loginUser} from "../../redux/login-reducer";
import {connect} from "react-redux";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import styles from "./Login.module.css";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20);

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formInput}>
                <p>Логин</p>
                {createField("login", [required, maxLength20], Input)}
            </div>
            <div className={styles.formInput}>
                <p>Пароль</p>
                {createField("password", [required, maxLength20], Input, {type: "password"})}
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <button>Отправить</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.login, formData.password);
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>Авторизация</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, {loginUser})(Login);