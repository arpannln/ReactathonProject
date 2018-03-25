import React, { Component } from 'react';
import axios from 'axios';

const url = "https://data.acridly34.hasura-app.io/v1/query"

class Video extends Component {
  constructor() {
    super();
    this.state = {
      room: [],
      users_ids: []
    }
  }

  getRoom() {
    axios.post(url,
      {
        "type": "select",
        "args": {
          "table": "room",
          "columns": [
            "*"
          ],
          "where": {
            "id": {
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

  getUserIds() {
    axios.post(url,
      {
      "type": "select",
      "args": {
          "table": "room_user",
          "columns": [
              "user_id"
          ],
          "where": {
              "room_id": {
                  "$eq": `${this.props.match.params.id}`
              }
          }
        }
      }).then(res => {
        this.setState({
          user_ids: res.data
        })
      })
  }

  componentDidMount() {
    this.getRoom();
    this.getUserIds();
  }

  render() {
    console.log(this.state);
    return (
      <div />
    )
  }
}

export default Video;
