import React from 'react';
import RequireAuth from '../../Components/Authentication/RequireAuth';

const Billing = () => {
  return (
    <div>
        <text>Hello Billing</text>
    </div>
  );
}

export default RequireAuth(Billing);
