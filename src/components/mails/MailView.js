import React, { useEffect } from 'react';
import axios from 'axios';
import backEnd from '../general/Backend';

function MailView(props) {
  const mail = props.location.state;

  useEffect(() => {
    const setRead = async () => {
      if (!mail.is_read) {
        const mailInfo = { id: mail.id, is_read: true };
        await axios.put(`${backEnd.address}/api/mails/${mail.id}`, mailInfo);
      }
    };
    setRead();
  }, [mail]);

  return (
    <div>
      <p>From: {props.location.state.id_user_from}</p>
      <p>To: {props.location.state.id_user_to}</p>
      <p>Subject: {props.location.state.subject}</p>
      <p>{props.location.state.message}</p>
    </div>
  );
}

export default MailView;
