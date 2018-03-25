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
        });
      });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    console.log(this.state.topics);
    return(
      <div>
        <div className="topics-header-div">
          <img className="topics-header" src="https://res.cloudinary.com/slicecloud/image/upload/v1522004911/header_sun_bkp0bd.jpg"/>
          <h1>Remember: You're Not Alone</h1>
        </div>
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
