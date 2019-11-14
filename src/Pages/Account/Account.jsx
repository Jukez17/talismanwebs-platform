import React from 'react';
import RequireAuth from '../../Components/Authentication/RequireAuth'


const Account = () => {
  return (
    <div>
        <text>Hello Account</text>
    </div>
  );
}

export default RequireAuth(Account);
