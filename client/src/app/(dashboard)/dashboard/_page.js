import React from 'react';
import Dashboard from './page';
import { cookies } from 'next/headers';

const PrivatePage = () => {
  let cookieStore = cookies();
  let token = cookieStore.get('token');

  if (!token) {
    return <div> Can&apos;t Load </div>;
  }

  return <Dashboard token={token.value}></Dashboard>;
};

export default PrivatePage;
