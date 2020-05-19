import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return (
            <div>
                <Header isAuth={this.props.isAuth} username={this.props.username}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        username: state.login.username
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);