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
    <table>
      <thead>
        <th>Date</th>
        <th>Read</th>
        <th>From</th>
        <th>Subject</th>
      </thead>
      {mails.map((mail, index) => (
        <tr>
          <td>{mail.sent}</td>
          <td>{mail.is_read}</td>
          <td>{mail.id_user_from}</td>
          <td>{mail.subject}</td>
        </tr>
      ))}
    </table>
  );
}

export default Inbox;
