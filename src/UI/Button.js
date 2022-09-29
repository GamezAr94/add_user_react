import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <input onClick={props.onClick} className={`${styles.input_button} ${props.className}` } type={props.type || "submit"} value={props.children}></input>
    );
}

export default Button;