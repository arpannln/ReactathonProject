import React, {Component} from 'react';
import axios from 'axios';
var url = "https://data.acridly34.hasura-app.io/v1/query";

class TopicsList extends Component {
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
    return(
      <ul>
      {
        this.state.topics.map(topic => {
          return (
            <div key=`${topic.id}`>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
            </div>
          )
        })
      }
      </ul>
    )
  }

}

export default TopicsList;
