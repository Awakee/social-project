import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : null)}>
            <div>
                <input {...input} {...props} />
                <div>
                    {hasError && <span>{meta.error}</span>}
                </div>
            </div>
        </div>
    )
}

export const createField = (name, validators, component, props = {}) => (
    <Field name={name} component={component} validate={validators} {...props}/>
)
