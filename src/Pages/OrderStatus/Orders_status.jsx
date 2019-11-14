import React from 'react';
import RequireAuth from '../../Components/Authentication/RequireAuth'

const OrdersStatus = () => {
  return (
    <div>
        <text>Hello Orders</text>
    </div>
  );
}

export default RequireAuth(OrdersStatus);
