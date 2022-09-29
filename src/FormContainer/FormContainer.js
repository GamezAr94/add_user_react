import React, { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './FormContainer.module.css';

const FormContainer = (props) => {

    const enteredInputAge = useRef();
    const enteredInputName = useRef();

    const SubmitHandler = (event) => {
        event.preventDefault();

        if (enteredInputName.current.value.trim().length === 0 || enteredInputAge.current.value.trim().length === 0) {
            props.addError( 
                {
                    title: 'Invalid Input',
                    message: 'ERROR: Empty Fields'
                }
            );
            return;
        }
        if (+enteredInputAge.current.value < 1) {
            props.addError(
                {
                    title: 'Invalid Age',
                    message: 'ERROR: Invalid Age'
                }
            );
            return;
        }
        const data = {
            id: Math.random(),
            name: enteredInputName.current.value,
            age: +enteredInputAge.current.value
        }
        props.onAddUser(data);
        enteredInputName.current.value = '';
        enteredInputAge.current.value = '';
    }

    return (
        <Card>
            <form onSubmit={SubmitHandler} className={styles.column_form}> 
                <label className={styles.input_label} htmlFor="name">User Name</label>
                <input className={styles.input_style} ref={enteredInputName} type='text' id='name'></input>
                <label className={styles.input_label} htmlFor="name">Age(Years)</label>
                <input className={styles.input_style} ref={enteredInputAge} type='number' id='name'></input>
                <Button type="submit" > Add User </Button>
            </form>
        </Card>
    );
};

export default FormContainer;