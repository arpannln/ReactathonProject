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
    console.log(this.state.topics);
    return(
      <div>
        <img className="topics-header" src="https://cdn.pixabay.com/photo/2018/03/15/10/40/panoramic-3227796_1280.jpg"/>
        <ul className = "topics-list">
        {
          this.state.topics.map(topic => {
            return (
              <span className="span-topic">
                <Link
                  to={`/topics/${topic.id}`}
                  key={`${topic.id}`}
                  className="link" >
                  <img className="topic-image" src={topic.image_url}></img>
                  <h3 id="topic-name" className="topic-name">{topic.name}</h3>
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

export default TopicsList;
