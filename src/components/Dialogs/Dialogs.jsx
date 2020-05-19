import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItems";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => (<DialogItem name={d.name} key={d.id} id={d.id}/>))

    let messagesElements = props.dialogsPage.messages
        .map(m => (<Message message={m.message} key={m.id}/>))

    if (!props.isAuth) return <Redirect to={"/login"}/>

    let addNewMessage = (values) => {
        props.onSendMessage(values.message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"message"} cols="30" placeholder={"Enter your message"} rows="2"/>
            <button>SEND</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;