import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Link to='/registration'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Main;
