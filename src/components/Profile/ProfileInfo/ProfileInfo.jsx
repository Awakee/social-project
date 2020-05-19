import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <img src={props.profile.photoUrl} className={classes.avatar} alt=""/>
            <div className={classes.info}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={classes.detail}>
                    <p>Возраст:<strong>{props.profile.age}</strong></p>
                    <p>Страна:<strong>{props.profile.country}</strong></p>
                    <p>Город:<strong>{props.profile.city}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;