import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import backEnd from '../general/Backend';

function Compose() {
  const [users, setUsers] = useState(null);
  const subject = useRef(null);
  const message = useRef(null);

  useEffect(() => {
    async function getUsers() {
      const receivedMails = await axios.get(`${backEnd.address}/api/users`);
      setUsers(receivedMails.data);
    }
    getUsers();
  }, []);

  const sendMessage = () => {
    console.log(subject.current.value);
    console.log(message.current.value);
  };

  if (users === null) return <p>Loading data...</p>;

  return (
    <div>
      <p>Select partner!</p>
      <select>
        {users.map((user, index) => (
          <option value={user.id} key={index}>
            {user.name}
          </option>
        ))}
      </select>
      <br></br>
      <input type='text' placeholder='Subject' ref={subject} />
      <br></br>
      <textarea
        name='message'
        id=''
        cols='30'
        rows='10'
        placeholder='Type here...'
        ref={message}
      ></textarea>
      <br></br>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Compose;
