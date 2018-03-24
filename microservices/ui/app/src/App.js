import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

var url = "https://data.acridly34.hasura-app.io/v1/query";

class App extends Component {

  constructor() {
    super()
    this.state = {
      topics: []
    }
  }

  getTopics() {
    axios.post(url,
    {
      "type": "select",
      "args": {
          "table": "topic",
          "columns": [
              "*"
          ]
      }
    })
      .then(res => {
        this.setState({
          topics: res.data
        })
      })
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const clusterName = process.env.REACT_APP_CLUSTER_NAME || 'NoClusterName';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
