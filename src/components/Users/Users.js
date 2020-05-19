import React from 'react';
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, ...props}) => {
    return (
        <div>
            <div className={classes.users}>
                {
                    users.map(user => <User user={user} follow={follow} unfollow={unfollow} key={user.id}/>)
                }
            </div>
            <div className={classes.pagination}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount}
                           pageSize={pageSize}/>
            </div>

        </div>
    )
}

export default Users;