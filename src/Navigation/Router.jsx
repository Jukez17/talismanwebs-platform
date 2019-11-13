import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import Login from '../Pages/Authentication/Login';
import Home from '../Pages/Home/Home';
import Account from '../Pages/Account/Account';
import Billing from '../Pages/Billing/Billing';
import OrderStatus from '../Pages/OrderStatus/Orders_status';
import Services from '../Pages/Services/Services';
import ContactUs from '../Pages/Contact/ContactUs';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const NavigationRouter = () => (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/log-in' component={Login} />
      <Route exact path='/home' component={Home}/>
      <Route path='/account' component={Account}/>
      <Route path='/billing' component={Billing}/>
      <Route path='/order_status' component={OrderStatus}/>
      <Route path='/services' component={Services}/>
      <Route path='/contact_us' component={ContactUs}/>
    </Switch>
)

export default NavigationRouter;
