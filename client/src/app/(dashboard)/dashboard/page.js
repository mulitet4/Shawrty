import React from 'react';
import Dashboard from './dashboard';
import { cookies } from 'next/headers';

const PrivatePage = () => {
  let cookieStore = cookies();
  let token = cookieStore.get('token');

  if (!token) {
    return <div> Can't Load </div>;
  }

  return <Dashboard token={token.value}></Dashboard>;
};

export default PrivatePage;
