import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var url = "https://data.acridly34.hasura-app.io/v1/query";

class Rooms extends Component {
  constructor() {
    super()
    this.state = {
      rooms: []
    }

  }

  getRooms() {
    axios.post(url,
      {
          "type": "select",
          "args": {
              "table": "room",
              "columns": [
                  "*"
              ],
              "where": {
                  "topic_id": {
                      "$eq": `${this.props.match.params.id}`
                  }
              }
          }
      })
      .then(res => {
        this.setState({
          rooms: res.data
        });
      });
  }

  componentDidMount() {
    this.getRooms();
  }

  render() {
    return(
      <div>
        <div className="topics-header-div">
          <img className="topics-header" src="https://res.cloudinary.com/slicecloud/image/upload/v1522004911/header_sun_bkp0bd.jpg"/>
          <h1>Remember: You're Not Alone</h1>
        </div>
        <ul className = "topics-list">
        {
          this.state.rooms.map(room => {
            console.log(room.sessionId);
            return (
              <span className="span-button">
                <Link
                  to={`/rooms/${room.session_id}/${room.name}`}
                  key={`${room.id}`}
                  className="link">
                  <div
                  className="topic-list-item">
                    <h3>{room.name}</h3>
                  </div>
                </Link>
              </span>
            );
          })
        }
        </ul>
      </div>

    )

  }
}

export default Rooms;
