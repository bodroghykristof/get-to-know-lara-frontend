import React, { useState, useRef, useContext } from 'react';
import UserFormContainer from './UserFormContainer';
import axios from 'axios';
import backEnd from '../general/Backend';
import { TokenContext } from '../general/TokenContext';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const [token, setToken] = useContext(TokenContext);

  const forgotPasswordAction = () =>
    alert('Shame on you, we do not have any smart solution for this yet');

  const checkLogin = () => {
    const emailInput = email.current.value;
    const passwordInput = password.current.value;

    if (emailInput === '' || passwordInput === '') {
      setErrorMessage('Please fill out all input fields!');
    } else {
      const user = {
        email: emailInput,
        password: passwordInput,
      };
      login(user);
    }
  };

  async function login(user) {
    try {
      const answer = await axios.post(
        `${backEnd.address}/api/auth/login`,
        user
      );
      setToken(answer.access_token);
      window.location.replace('/mail/inbox');
    } catch (e) {
      setErrorMessage('Incorrect email or password');
    }
  }

  return (
    <UserFormContainer>
      <input type='text' placeholder='Email' ref={email}></input>
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
