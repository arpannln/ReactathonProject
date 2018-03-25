import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/explore.css';
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
            <span className="span-topic">
              <Link
                to={`/topics/${topic.id}`}
                key={`${topic.id}`}
                className="link" >
                <img className="topic-image" src="https://www.epainassist.com/images/Article-Images/agoraphobia.jpg"></img>
                <h3 id="topic-name" className="topic-name">{topic.name}</h3>
              </Link>
            </span>
          )
        })
      }
      </ul>
    )
  }

}

export default TopicsList;
