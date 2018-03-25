import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import './App.css';
import Nav from './nav/nav';
import TopicsList from './components/topicsList';
import Rooms from './components/rooms';
import Video from './components/video';


const App = () => (
    <HashRouter>
      <div>
        <header>
          <Nav/>
        </header>
        <Switch>
        <Route path="/topics/:id" component={Rooms}/>
          <Route path="/topics" component={TopicsList} />
          <Route path="/rooms/:id" component={Video} />
          <Route path="/"  />
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>

);

export default App;
