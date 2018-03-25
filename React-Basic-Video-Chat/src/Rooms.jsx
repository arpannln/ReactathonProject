import React from 'react';
import ReactDOM from 'react-dom';
import {renderApp} from './actions.js';

var OpenTok = require('opentok');
const API_KEY = '46086702';
const API_SECRET = '89fa71cc2dde599c421545a6d8890e1a340e8a02';


export default class Rooms extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      videos: []
    }
  }
  componentDidMount () {
    this.setState({videos: ["2_MX40NjA4NjcwMn5-MTUyMTkzMzAwMzY2Nn5xVnRFVkMwOThUU2s5b3FkNkhwYjE1UDV-fg",
      "2_MX40NjA4NjcwMn5-MTUyMTkzMzAxNzYzM355bkxDc1diR2QveFg2R3dxOTlubndpVDV-fg",
      "2_MX40NjA4NjcwMn5-MTUyMTkzMzAzMDA4MH5xYk91a3NHbTl5UEhjenBSbVNJSlBnZ0N-fg",
      "2_MX40NjA4NjcwMn5-MTUyMTkzMzAzNzU0N35XUk9DLy9KdkliUVBNK1JxTlZtNHpaaUx-fg",
      "2_MX40NjA4NjcwMn5-MTUyMTkzMzA0MzY3M35zVGhDcUduVFFQQnVZdGJmUHpoZ3JjeHF-fg",
      "2_MX40NjA4NjcwMn5-MTUyMTkzMzA0MzY3M35zVGhDcUduVFFQQnVZdGJmUHpoZ3JjeHF-fg",
     ]})
  }

  handleSubmit(sessionId) {
    const opentok = new OpenTok(API_KEY, API_SECRET);
    const SESSION_ID = sessionId;
    const TOKEN = opentok.generateToken(SESSION_ID);
    if (API_KEY && TOKEN && SESSION_ID) {
      renderApp({
        apiKey: API_KEY,
        sessionId: SESSION_ID,
        token: TOKEN,
      });
    }
  }

  render () {
    const videos = this.state.videos;

    return (
      <div>
        { videos.map( (sessionId) => <button key={sessionId} onClick={ () => this.handleSubmit(sessionId)}>Button</button>)

        }
      </div>
    );
  }
}
// if (API_KEY && TOKEN && SESSION_ID) {
//   renderApp({
//     apiKey: API_KEY,
//     sessionId: SESSION_ID,
//     token: TOKEN,
//   });
// } else {
//   fetch(SAMPLE_SERVER_BASE_URL + '/session')
//     .then(data => data.json())
//     .then(renderApp)
//     .catch((err) => {
//       console.error('Failed to get session credentials', err);
//       alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
//     });
// }
