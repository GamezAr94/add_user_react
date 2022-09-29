import React, {useState} from 'react';
import styles from './App.module.css';
import FloatingScreen from './FloatingScreen/FloatingScreen';
import FormContainer from './FormContainer/FormContainer';
import UserRecord from './UserRecord/UserRecord';

function App() {
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const addUserHadler = (event) => {
		setUsers(prevUsers => {
			return [...prevUsers, event];
		});
	}
	const showHideBoxHandler = () => {
		setErrorMessage(null);
	}
	const addErrorMessage = (event) => {
		setErrorMessage(event);
	}
	return (
		<div className={styles.App}>
			<FormContainer onAddUser={addUserHadler} setMessage={addErrorMessage} addError={addErrorMessage}/>
			{users.length > 0 ? <UserRecord usersList={users}/> : ''}
			{ errorMessage && <FloatingScreen errorMessage={errorMessage} onClick={showHideBoxHandler}/> } 
		</div>
	);
}

export default App;
