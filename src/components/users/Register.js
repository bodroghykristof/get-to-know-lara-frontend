import React, { useState, useRef } from 'react';
import UserFormContainer from './UserFormContainer';
import axios from 'axios';
import backEnd from '../general/Backend';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const userName = useRef(null);
  const email = useRef(null);
  const passwordOne = useRef(null);
  const passwordTwo = useRef(null);

  const checkRegistration = () => {
    const userNameInput = userName.current.value;
    const emailInput = email.current.value;
    const passwordOneInput = passwordOne.current.value;
    const passwordTwoInput = passwordTwo.current.value;

    if (
      userNameInput === '' ||
      emailInput === '' ||
      passwordOneInput === '' ||
      passwordTwoInput === ''
    ) {
      setErrorMessage('Please fill out all input fields!');
    } else if (passwordOneInput !== passwordTwoInput) {
      setErrorMessage('Mismatching passwords!');
    } else {
      const user = {
        name: userNameInput,
        email: emailInput,
        password: passwordOneInput,
      };
      register(user);
    }
  };

  async function register(user) {
    const answer = await axios.post(
      `${backEnd.address}/api/auth/register`,
      user
    );
    console.log(answer);
    window.location.replace('/');
  }

  return (
    <UserFormContainer>
      <h1>Register</h1>
      <input type='text' placeholder='Username' ref={userName}></input>
      <br></br>
      <input type='text' placeholder='Email' ref={email}></input>
      <br></br>
      <input type='password' placeholder='Password' ref={passwordOne}></input>
      <br></br>
      <input
        type='password'
        placeholder='Password Again'
        ref={passwordTwo}
      ></input>
      <br></br>
      <p>{errorMessage}</p>
      <button
        id='loginConfirmationButton'
        onClick={(e) => checkRegistration(e)}
      >
        Register
      </button>
    </UserFormContainer>
  );
}

export default Register;
