import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Navbar = (props) => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.activeLink}><i className="fas fa-user"></i>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.activeLink}><i className="far fa-envelope"></i>Мои сообщения</NavLink></li>
                <li><NavLink to="/users" activeClassName={classes.activeLink}>Люди</NavLink></li>
                <li><NavLink to="/asd" activeClassName={classes.activeLink}><i className="fas fa-newspaper"></i>Новости</NavLink></li>
                <li><NavLink to="http://localhost:3000/" activeClassName={classes.activeLink}><i className="fas fa-music"></i>Музыка</NavLink></li>
                <li><NavLink to="http://localhost:3000/" activeClassName={classes.activeLink}><i className="fas fa-cog"></i>Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

let withAuth = withAuthRedirect(Navbar);

export default withAuth;