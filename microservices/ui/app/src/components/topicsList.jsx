import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
      <ul className = "topics-list">
      {
        this.state.topics.map(topic => {
          return (
            <Link
              to={`/topics/${topic.id}`}
              key={`${topic.id}`}
              className="link">
              <div
              className="topic-list-item">
                <h3>{topic.name}</h3>
              </div>
            </Link>
          )
        })
      }
      </ul>
    )
  }

}

export default TopicsList;
