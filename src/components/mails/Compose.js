import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backEnd from '../general/Backend';

function Compose() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const receivedMails = await axios.get(`${backEnd.address}/api/users`);
      setUsers(receivedMails.data);
    }
    getUsers();
  }, []);

  if (users === null) return <p>Loading data...</p>;

  return (
    <div>
      <p>Select partner!</p>
      <select>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
      <br></br>
      <input type='text' placeholder='Subject' />
      <br></br>
      <textarea
        name='message'
        id=''
        cols='30'
        rows='10'
        placeholder='Type here...'
      ></textarea>
      <br></br>
      <button>Send</button>
    </div>
  );
}

export default Compose;
