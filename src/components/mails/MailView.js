import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import backEnd from '../general/Backend';
import { TokenContext } from '../general/TokenContext';

function MailView(props) {
  const userId = 1;
  const { mailId } = useParams();
  const [mail, setMail] = useState(props.location.state);
  const [token, setToken] = useContext(TokenContext);

  useEffect(() => {
    async function fetchMail() {
      let mailData = mail;
      if (mail === undefined) {
        mailData = (await axios.get(`${backEnd.address}/api/mails/${mailId}`))
          .data;
        console.log(mailData);
      }
      if (!mailData.is_read && mailData.id_user_to === userId) {
        const mailInfo = { id: mail.id, is_read: true };
        await axios.put(`${backEnd.address}/api/mails/${mail.id}`, mailInfo);
      }
      setMail(mailData);
    }
    fetchMail();
  }, [mail, mailId]);

  if (token === null) return <Redirect to='/login' />;
  if (mail === undefined) return <p>Loading data...</p>;

  return (
    <div>
      <p>From: {mail.id_user_from}</p>
      <p>To: {mail.id_user_to}</p>
      <p>Subject: {mail.subject}</p>
      <p>{mail.message}</p>
    </div>
  );
}

export default MailView;
