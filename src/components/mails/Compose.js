import React, { useState, useEffect, useRef, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import backEnd from '../general/Backend';
import { TokenContext } from '../general/TokenContext';

function Compose(props) {
  const [users, setUsers] = useState(null);
  const subject = useRef(null);
  const message = useRef(null);
  const partner = useRef(null);
  const [token, setToken] = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    async function getUsers() {
      const receivedMails = await axios.get(`${backEnd.address}/api/users`);
      setUsers(receivedMails.data);
    }
    getUsers();
  }, []);

  async function sendMessage(finished = true) {
    const partnerId = partner.current.value;
    const messageSubject = subject.current.value;
    const messageBody = message.current.value;

    const email = {
      id_user_from: 1,
      id_user_to: partnerId,
      subject: messageSubject,
      message: messageBody,
      finished: finished,
    };

    if (props.location.state) {
      const mailId = props.location.state.id;
      await axios.put(`${backEnd.address}/api/mails/${mailId}`, email);
    } else {
      await axios.post(`${backEnd.address}/api/mails`, email);
    }
    history.push("/");
  }

  if (token === null) return <Redirect to='/login' />;
  if (users === null) return <p>Loading data...</p>;

  return (
    <div>
      <p>Select partner!</p>
      <select
        ref={partner}
        defaultValue={
          props.location.state ? props.location.state.id_user_to : null
        }
      >
        {users.map((user, index) => (
          <option value={user.id} key={index}>
            {user.name}
          </option>
        ))}
      </select>
      <br></br>
      <input
        type='text'
        placeholder='Subject'
        defaultValue={props.location.state ? props.location.state.subject : ''}
        ref={subject}
      />
      <br></br>
      <textarea
        name='message'
        id=''
        cols='30'
        rows='10'
        placeholder='Type here...'
        defaultValue={props.location.state ? props.location.state.message : ''}
        ref={message}
      ></textarea>
      <br></br>
      <button onClick={() => sendMessage(true)}>Send</button>
      <button onClick={() => sendMessage(false)}>Save</button>
    </div>
  );
}

export default Compose;
