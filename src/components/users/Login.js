import React, { useState, useRef } from 'react';
import UserFormContainer from './UserFormContainer';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const userName = useRef(null);
  const password = useRef(null);

  const forgotPasswordAction = () =>
    alert('Shame on you, we do not have any smart solution for this yet');

  const checkLogin = () => {
    const userNameInput = userName.current.value;
    const passwordInput = password.current.value;

    if (userNameInput === '' || passwordInput === '') {
      setErrorMessage('Please fill out all input fields!');
    } else {
      window.location.replace('/');
    }
  };

  return (
    <UserFormContainer>
      <input type='text' placeholder='Username' ref={userName}></input>
      <br></br>
      <input type='password' placeholder='Password' ref={password}></input>
      <br></br>
      <p>{errorMessage}</p>
      <p id='forgotPassword' onClick={() => forgotPasswordAction()}>
        Forgot my password
      </p>
      <button id='loginConfirmationButton' onClick={checkLogin}>
        Login
      </button>
    </UserFormContainer>
  );
}

export default Login;
