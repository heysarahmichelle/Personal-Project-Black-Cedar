import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/Home Page/HomePage";
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Help from './components/Help/Help';
import WhereWeCan from './components/Where We Can/WhereWeCan';
import Outlet from './components/Outlet/Outlet';
import Rewards from './components/Rewards/Rewards';

export default (
  <Switch>
    <Route component={HomePage} exact path="/" />
    <Route component={Shop} path="/collections/all" />
    <Route component={Blog} path="/blogs/news" />
    <Route component={Help} path="/pages/help-1" />
    <Route component={WhereWeCan} path="/pages/where-we-can" />
    <Route component={Outlet} path="/collections/outlet" />
    <Route component={Rewards} path="/pages/rewards"/>
  </Switch>
);