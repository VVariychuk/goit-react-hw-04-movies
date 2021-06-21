import React from 'react';

import { Route, Switch, NavLink } from 'react-router-dom';
// import Loader from "react-loader-spinner";

// import s from './App.module.css'

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className=""
          activeClassName=""
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
         to="/movies"
          className=""
          activeClassName="" 
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact to="/"  component=""/>
      <Route to="/movies"  component=""/>
      <Route to="/movies/:movieId"  component=""/>
      <Route to="/movies/:movieId/cast"  component=""/>
      <Route to="/movies/:movieId/reviews"  component=""/>
      <Route component="{}"/>

    </Switch>
  </>

)
export default App;