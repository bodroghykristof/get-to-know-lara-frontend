import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import backEnd from '../general/Backend';

function MailBox(props) {
  const userId = 1;
  const [mails, setMails] = useState(null);

  useEffect(() => {
    async function getMails() {
      const receivedMails = await axios.get(
        `${backEnd.address}/api/mails/${props.type}/${userId}`
      );
      setMails(receivedMails.data);
    }
    getMails();
  }, [props.type]);

  if (mails === null) return <p>Loading data...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Read</th>
          <th>From</th>
          <th>Email</th>
          <th>Subject</th>
          {props.type === 'drafts' ? <th></th> : null}
        </tr>
      </thead>
      <tbody>
        {mails.map((mail, index) => (
          <tr key={index}>
            <td>{mail.created}</td>
            <td>{mail.is_read}</td>
            <td>{mail.partner}</td>
            <td>{mail.partner_email}</td>
            <td>{mail.subject}</td>
            {props.type === 'drafts' ? (
              <td>
                <Link to='/mail/compose'>Modify</Link>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

MailBox.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MailBox;
