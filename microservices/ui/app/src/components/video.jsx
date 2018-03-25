import React from 'react';
import ReactDOM from 'react-dom';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import axios from 'axios';
import '../styles/video.css';
const url = "https://data.acridly34.hasura-app.io/v1/query";

var OpenTok = require('opentok');
const API_KEY = '46086702';
const API_SECRET = '89fa71cc2dde599c421545a6d8890e1a340e8a02';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connection: 'Connecting',
      room: [],
      users_ids: [],
      publishVideo: true,
    };

    this.opentok = new OpenTok(API_KEY, API_SECRET);
    this.sessionId = props.match.params.id;
    this.token = this.opentok.generateToken(this.sessionId);

    this.sessionEventHandlers = {
      sessionConnected: () => {
        this.setState({ connection: 'Connected' });
      },
      sessionDisconnected: () => {
        this.setState({ connection: 'Disconnected' });
      },
      sessionReconnected: () => {
        this.setState({ connection: 'Reconnected' });
      },
      sessionReconnecting: () => {
        this.setState({ connection: 'Reconnecting' });
      },
    };

    this.publisherEventHandlers = {
      accessDenied: () => {
        console.log('User denied access to media source');
      },
      streamCreated: () => {
        console.log('Publisher stream created');
      },
      streamDestroyed: ({ reason }) => {
        console.log(`Publisher stream destroyed because: ${reason}`);
      },
    };

    this.subscriberEventHandlers = {
      videoEnabled: () => {
        console.log('Subscriber video enabled');
      },
      videoDisabled: () => {
        console.log('Subscriber video disabled');
      },
    };
  }

  getRoom() {
    axios.post(url,
      {
        "type": "select",
        "args": {
          "table": "room",
          "columns": [
            "session_id",
            "name"
          ],
          "where": {
            "session_id": {
              "$eq": `${this.props.match.params.id}`
            }
          }
        }
      }).then(res => {
        this.setState({
          room: res.data
        })
      })
  }

  // getUserIds() {
  //   axios.post(url,
  //     {
  //     "type": "select",
  //     "args": {
  //         "table": "room_user",
  //         "columns": [
  //             "user_id"
  //         ],
  //         "where": {
  //             "session_id": {
  //                 "$eq": `${this.props.match.params.id}`
  //             }
  //         }
  //       }
  //     }).then(res => {
  //       this.setState({
  //         user_ids: res.data
  //       })
  //     })
  // }

  componentWillMount() {
    this.getRoom();
    // this.getUserIds();
  }

  componentDidMount() {
    console.log(this.state);
  }


  onSessionError = error => {
    this.setState({ error });
  };

  onPublish = () => {
    console.log('Publish Success');
  };

  onPublishError = error => {
    this.setState({ error });
  };

  onSubscribe = () => {
    console.log('Subscribe Success');
  };

  onSubscribeError = error => {
    this.setState({ error });
  };

  toggleVideo = () => {
    this.setState({ publishVideo: !this.state.publishVideo });
  };



  render() {

    //
    // if (this.state.room[0]) {
    //   this.opentok = new OpenTok(API_KEY, API_SECRET);
    //   this.sessionId = this.state.room[0].session_id;
    //   this.token = opentok.generateToken(sessionId);
    // }
    console.log(this.sessionId);
    const {token, sessionId} = this;
    if (this.token) {

      const apiKey = API_KEY;
      const { error, connection, publishVideo } = this.state;
      return (
        <div className="outer-div">
          <h1 className="room-name">{this.props.match.params.name}</h1>
          <div id="sessionStatus">Session Status: {connection}</div>
          <button
            className="go-back-button"
            onClick={() => this.props.history.goBack()}>Go Back to Topic</button>
          {error ? (
            <div className="error">
              <strong>Error:</strong> {error}
            </div>
          ) : null}

          <OTSession
            apiKey={apiKey}
            sessionId={sessionId}
            token={token}
            onError={this.onSessionError}
            eventHandlers={this.sessionEventHandlers}
            className="session-div main"
          >
            <button id="videoButton" onClick={this.toggleVideo}>
              {publishVideo ? 'Disable' : 'Enable'} Video
            </button>
            <OTPublisher
              properties={{ publishVideo, width: 300, height: 300, }}
              onPublish={this.onPublish}
              onError={this.onPublishError}
              eventHandlers={this.publisherEventHandlers}
              className="pub-div main"
            />
          <OTStreams className="sub-div-outer main">
              <OTSubscriber
                properties={{ width: 200, height: 200 }}
                onSubscribe={this.onSubscribe}
                onError={this.onSubscribeError}
                eventHandlers={this.subscriberEventHandlers}
                className="sub-div main"
              />
            </OTStreams>
          </OTSession>


        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }

    // this.sessionId = "2_MX40NjA4NjcwMn5-MTUyMTk0NzA0MjIzM35EbGlCRko4Mis4MDgyTWV0YzExYkZRRkt-fg";
    // this.token = this.opentok.generateToken(this.sessionId);
    // const apiKey = API_KEY;
    // const token = this.token;
    // const sessionId = this.sessionId;
  }
}
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
// import axios from 'axios';
// const url = "https://data.acridly34.hasura-app.io/v1/query";
//
// var OpenTok = require('opentok');
// const API_KEY = '46086702';
// const API_SECRET = '89fa71cc2dde599c421545a6d8890e1a340e8a02';
//
// export default class Video extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       connection: 'Connecting',
//       room: [],
//       users_ids: [],
//       publishVideo: true,
//     };
//
//     this.sessionEventHandlers = {
//       sessionConnected: () => {
//         this.setState({ connection: 'Connected' });
//       },
//       sessionDisconnected: () => {
//         this.setState({ connection: 'Disconnected' });
//       },
//       sessionReconnected: () => {
//         this.setState({ connection: 'Reconnected' });
//       },
//       sessionReconnecting: () => {
//         this.setState({ connection: 'Reconnecting' });
//       },
//     };
//
//     this.publisherEventHandlers = {
//       accessDenied: () => {
//         console.log('User denied access to media source');
//       },
//       streamCreated: () => {
//         console.log('Publisher stream created');
//       },
//       streamDestroyed: ({ reason }) => {
//         console.log(`Publisher stream destroyed because: ${reason}`);
//       },
//     };
//
//     this.subscriberEventHandlers = {
//       videoEnabled: () => {
//         console.log('Subscriber video enabled');
//       },
//       videoDisabled: () => {
//         console.log('Subscriber video disabled');
//       },
//     };
//   }
//
//   getRoom() {
//     axios.post(url,
//       {
//         "type": "select",
//         "args": {
//           "table": "room",
//           "columns": [
//             "*"
//           ],
//           "where": {
//             "id": {
//               "$eq": `${this.props.match.params.id}`
//             }
//           }
//         }
//       }).then(res => {
//         this.setState({
//           room: res.data
//         })
//       })
//   }
//
//   getUserIds() {
//     axios.post(url,
//       {
//       "type": "select",
//       "args": {
//           "table": "room_user",
//           "columns": [
//               "user_id"
//           ],
//           "where": {
//               "room_id": {
//                   "$eq": `${this.props.match.params.id}`
//               }
//           }
//         }
//       }).then(res => {
//         this.setState({
//           user_ids: res.data
//         })
//       })
//   }
//
//   componentDidMount() {
//     this.getRoom();
//     this.getUserIds();
//   }
//
//   onSessionError = error => {
//     this.setState({ error });
//   };
//
//     onPublish = () => {
//       console.log('Publish Success');
//     };
//
//     onPublishError = error => {
//       this.setState({ error });
//     };
//
//     onSubscribe = () => {
//       console.log('Subscribe Success');
//     };
//
//     onSubscribeError = error => {
//       this.setState({ error });
//     };
//
//     toggleVideo = () => {
//       this.setState({ publishVideo: !this.state.publishVideo });
//     };
//
//   render() {
//     const apiKey = API_KEY;
//     const opentok = new OpenTok(API_KEY, API_SECRET);
//     const sessionId = "2_MX40NjA4NjcwMn5-MTUyMTk0NzA0MjIzM35EbGlCRko4Mis4MDgyTWV0YzExYkZRRkt-fg";
//     const token = opentok.generateToken(sessionId);
//     const { error, connection, publishVideo } = this.state;
//     console.log(this.state);
//     return (
//       <div>
//         <div id="sessionStatus">Session Status: {connection}</div>
//         {error ? (
//           <div className="error">
//             <strong>Error:</strong> {error}
//           </div>
//         ) : null}
//         <OTSession
//           apiKey={apiKey}
//           sessionId={sessionId}
//           token={token}
//           onError={this.onSessionError}
//           eventHandlers={this.sessionEventHandlers}
//         >
//         <button id="videoButton" onClick={this.toggleVideo}>
//           {publishVideo ? 'Disable' : 'Enable'} Video
//         </button>
//           <OTPublisher
//             properties={{ publishVideo, width: 800, height: 640 }}
//             onPublish={this.onPublish}
//             onError={this.onPublishError}
//             eventHandlers={this.publisherEventHandlers}
//           />
//           <OTStreams>
//             <OTSubscriber
//               properties={{ width: 800, height: 640 }}
//               onSubscribe={this.onSubscribe}
//               onError={this.onSubscribeError}
//               eventHandlers={this.subscriberEventHandlers}
//             />
//           </OTStreams>
//         </OTSession>
//         <button> Go Back to Home  </button>
//       </div>
//     );
//   }
// }
