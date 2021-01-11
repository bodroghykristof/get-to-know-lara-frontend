import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import backEnd from '../general/Backend';
import { TokenContext } from '../general/TokenContext';

function MailBox(props) {
  const userId = 1;
  const [mails, setMails] = useState(null);
  const [token, setToken] = useContext(TokenContext);

  useEffect(() => {
    async function getMails() {
      const receivedMails = await axios.get(
        `${backEnd.address}/api/mails/${props.type}/${userId}`
      );
      setMails(receivedMails.data);
    }
    getMails();
    // if (token !== null) getMails();
  }, [props.type]);

  if (token === null) return <Redirect to='/login' />;
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

export default MailBox;
