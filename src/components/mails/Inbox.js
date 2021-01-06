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
        <tr>
          <th>Date</th>
          <th>Read</th>
          <th>From</th>
          <th>Email</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {mails.map((mail, index) => (
          <tr key={index}>
            <td>{mail.sent}</td>
            <td>{mail.is_read}</td>
            <td>{mail.from}</td>
            <td>{mail.from_email}</td>
            <td>{mail.subject}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Inbox;
