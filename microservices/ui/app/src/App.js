import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import './App.css';
import Nav from './nav/nav'


const App = () => (
    <HashRouter>
      <div>
        <header>
          <Nav/>
        </header>
        <Switch>
          <Route path="/"  />
          <Route path="/topics"  />
          <Route path="/topics/:id" />
          <Route path="/rooms/:id" />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>

);

export default App;
