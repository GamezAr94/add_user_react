import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './FloatingScreen.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles.background} onClick={props.onClick}> </div>;
}
const Modal = (props) => {
	return (           
    <Card className={styles.no_margins}>
        <div className={styles.title_label}>{props.title}</div>
        <div className={styles.message}>{props.message}</div>
        <Button onClick={props.onClick} className={styles.aligned_rigth} > Okay </Button>
    </Card>);
}

const FloatingScreen = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal title={props.errorMessage.title} message={props.errorMessage.message} onClick={props.onClick} />, 
                document.getElementById('modal-root')
            )}
        </>
    );
}

export default FloatingScreen;