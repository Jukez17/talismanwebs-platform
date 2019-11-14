import React from 'react';
import RequireAuth from '../../Components/Authentication/RequireAuth'

const Services = () => {
  return (
    <div>
        <text>Hello Services</text>
    </div>
  );
}

export default RequireAuth(Services);
