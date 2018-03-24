import React from 'react';
import ReactDOM from 'react-dom';
import '@opentok/client';
import {renderApp} from './actions.js';

export default class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const API_KEY = '46086702';
    const SESSION_ID = '1_MX40NjA4NjcwMn5-MTUyMTkyNTg2NDkxNX5BSUZYMEFhbk13VDdjVzR2T3FRRG82Y2V-fg';
    const TOKEN = 'T1==cGFydG5lcl9pZD00NjA4NjcwMiZzaWc9Y2M1MTNiNjU1MDgwNWI3MmZhZGRlN2RjNGM2NWI3MTU1MTM3ZDdjZDpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamN3TW41LU1UVXlNVGt5TlRnMk5Ea3hOWDVCU1VaWU1FRmhiazEzVkRkalZ6UjJUM0ZSUkc4MlkyVi1mZyZjcmVhdGVfdGltZT0xNTIxOTI5ODM5Jm5vbmNlPTAuNDMyMjE2OTU2NDM0MjQ4ODQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMTkzMzQzOCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
    if (API_KEY && TOKEN && SESSION_ID) {
      renderApp({
        apiKey: API_KEY,
        sessionId: SESSION_ID,
        token: TOKEN,
      });
    }
  }

  render () {


    return (<div>

        <button onClick={this.handleSubmit} >Button</button>
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
