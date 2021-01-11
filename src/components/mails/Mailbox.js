import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import backEnd from '../general/Backend';
import { TokenContext } from '../general/TokenContext';
import RequireAuth from '../../authentication/RequireAuth';

function MailBox(props) {
  const [mails, setMails] = useState(null);
  const [token] = useContext(TokenContext);

  useEffect(() => {
    async function getMails() {
      const receivedMails = await axios.get(
        `${backEnd.address}/api/${props.type}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMails(receivedMails.data);
    }
    if (token !== null) getMails();
  }, [props.type, token]);

  if (mails === null) return <p>Loading data...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Read</th>
          <th>{props.type === 'to' ? 'From' : 'To'}</th>
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
            {props.type !== 'drafts' ? (
              <td>
                <Link
                  to={{
                    pathname: `/mail/view/${mail.id}`,
                    state: mail,
                  }}
                >
                  {mail.subject}
                </Link>
              </td>
            ) : (
              <td>{mail.subject}</td>
            )}
            {props.type === 'drafts' ? (
              <td>
                <Link to={{ pathname: '/mail/compose', state: mail }}>
                  Modify
                </Link>
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

export default RequireAuth(MailBox);
