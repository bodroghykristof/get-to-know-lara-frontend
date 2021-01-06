import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backEnd from '../general/Backend';

function Inbox() {
  const userId = 1;
  const [mails, setMails] = useState([]);

  useEffect(() => {
    async function getMails() {
      const receivedMails = await axios.get(
        `${backEnd.address}/api/mails/to/${userId}`
      );
      setMails(receivedMails.data);
    }
    getMails();
  }, []);

  if (mails === null) return;

  return (
    <div>
      {mails.map((mail, index) => (
        <p key={index}>{mail.message}</p>
      ))}
    </div>
  );
}

export default Inbox;
