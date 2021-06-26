import React, { Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Home from './components/Home';

const MovieDetails = lazy(()=>import('./components/Movies/MovieDetails' /* webpackChunkName: "MoviesDetails" */));

const MoviesFinder = lazy(()=> import('./components/Movies/MoviesFinder' /* webpackChunkName: "MoviesFinder" */));


// import Loader from "react-loader-spinner";

// import s from './App.module.css'

const App = () => (
  <>
    <Router>
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
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:movieId" render={props => <MovieDetails {...props} />}/>
        <Route path="/movies"  render={props => <MoviesFinder {...props} /> } />            
        
        </Switch>
        </Suspense>
    </Router>
  </>

)
export default App;