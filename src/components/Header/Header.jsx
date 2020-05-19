import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src="./images/logo.png" alt=""/>
                    <p>SocialClub</p>
                </div>
                <div className={classes.auth}>
                    <p>{props.isAuth ? `Авторизован:${props.username}` : 'Авторизуйтесь'}</p>
                    {!props.isAuth ? <NavLink to={'/login'}>LOGIN</NavLink> : null}
                </div>
            </div>
        </header>
    )
}

export default Header;