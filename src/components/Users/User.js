import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, follow, unfollow }) => {
    return (
        <div className={classes.users}>
            <div className={classes.card}>
                <div className={classes.follow}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photoUrl != null ? user.photoUrl : userPhoto} alt=""/>
                    </NavLink>
                    {user.followed
                        ? <button onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
                <div className={classes.info}>
                    <span>FULLNAME: <strong>{user.fullName}</strong></span>
                    <span>STATUS: <strong>{user.status}</strong></span>
                    <span>CITY: <strong>{user.city}</strong></span>
                    <span>COUNTRY:<strong>{user.country}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default User;