import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Link to='/registration'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/mail/inbox'>Inbox</Link>
      <Link to='/mail/sent'>Sent</Link>
    </div>
  );
}

export default Main;
