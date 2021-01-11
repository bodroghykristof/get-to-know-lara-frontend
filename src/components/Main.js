import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backEnd from './general/Backend';

function Main() {
  return (
    <div>
      <Link to='/registration'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/mail/inbox'>Inbox</Link>
      <Link to='/mail/sent'>Sent</Link>
      <Link to='/mail/drafts'>Drafts</Link>
      <Link to='/mail/compose'>Compose</Link>
    </div>
  );
}

export default Main;
