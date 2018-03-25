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
import Splash from './components/splash';
import Footer from './components/footer';


const App = () => (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" component={Nav} />
        </Switch>
        <Switch>
          <Route path="/topics/:id" component={Rooms}/>
          <Route path="/topics" component={TopicsList} />
          <Route path="/rooms/:id/:name" component={Video} />
          <Route path="/" component={Splash} />
          <Redirect to="/" />
        </Switch>
        <Switch>
          <Route path="/" component={Footer} />
        </Switch>
      </div>
    </HashRouter>

);

export default App;
