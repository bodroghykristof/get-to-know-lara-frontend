import React from 'react';
import { useParams } from 'react-router-dom';

function MailView(props) {
  const { id } = useParams();

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
