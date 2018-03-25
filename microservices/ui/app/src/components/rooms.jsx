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
        })
      })
  }

  componentDidMount() {
    this.getRooms();
  }

  render() {
    return(
      <ul className = "topics-list">
      {
        this.state.rooms.map(room => {
          return (
            <Link
              to={`/rooms/${room.session_id}`}
              key={`${room.id}`}
              className="link">
              <div
              className="topic-list-item">
                <h3>{room.name}</h3>
              </div>
            </Link>
          )
        })
      }
      </ul>
    )

  }
}

export default Rooms;
