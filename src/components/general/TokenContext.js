import React, { useState, createContext } from 'react';

export const TokenContext = createContext();

export function TokenProvider(props) {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
}
