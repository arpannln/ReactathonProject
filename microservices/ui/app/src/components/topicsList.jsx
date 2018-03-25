import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/explore.css';
import axios from 'axios';
var url = "https://data.acridly34.hasura-app.io/v1/query";

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      topics: [],
      search: ""
    };
    this.getTopics();
  }

  handleChange(e) {
    this.setState( {search: this.refs.filterTextInput.value });
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
    var topics = this.state.topics;
    if (topics.length > 0) {
      console.log(topics[0]);
      topics = topics.filter( topic => topic.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    }
    return(

      <div className="discover">
        <div className="topics-header-div">
          <img className="topics-header" src="https://res.cloudinary.com/slicecloud/image/upload/v1522004911/header_sun_bkp0bd.jpg"/>
          <h1>Remember: You're Not Alone</h1>
        </div>
        <form className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              ref="filterTextInput"
              onChange={this.handleChange}
            />
          </form>
        <ul className = "topics-list">
        {
          topics.map(topic => {

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

            )
          })
        }
      </ul>
    </div>

    )
  }

}

export default TopicsList;
