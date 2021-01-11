import React, { useContext } from 'react';
import { TokenContext } from '../components/general/TokenContext';
import { Redirect } from 'react-router-dom';

export default function RequireAuth(ComposedComponent) {
  const loginRoute = '/login';

  const RequireAuth = () => {
    const [token] = useContext(TokenContext);

    if (token === null) {
      return <Redirect to={loginRoute} />;
    }

    return <ComposedComponent {...this.props} />;
  };
  return RequireAuth;
}
