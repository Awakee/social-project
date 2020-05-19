import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, setTotalCount, unfollow} from "../../redux/users-reducer";
import classes from "./Users.module.css";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <div className={classes.users}>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   isAuth={this.props.isAuth}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        userId: state.login.userId,
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state)
    }
}



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setTotalCount, setCurrentPage, getUsers})
)(UsersContainer)