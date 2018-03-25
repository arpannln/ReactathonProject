import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }


render () {
  return (
  <div>
    <div class="panel panel_1">
      <h1 class="panel_header">Welcome to A place to talk</h1>
      <p class="panel_1_quote">“The best part about being with a group is that you don’t have to do everything alone.”</p>
      <a data-scroll href="#panel_2">Learn More</a>
    </div>

    <div class="panel panel_2" id="panel_2">
      <h1 class="panel_header">Mission Statement</h1>
      <p>The American Psychological Association notes another important benefit of group therapy: diversity. We all have different experiences, backgrounds, and personalities, which leads us to our own unique perspective on the world. Working with a group can help clients see things from a new perspective, which may illuminate new ways to take on old problems and new strategies to overcome obstacles that seem insurmountable (APA, 2017).</p>
    </div>

    <div class="panel panel_3">
      <h1 class="panel_header">Psychoeducational</h1>
      <ul>
        <li>A group that provides its members with the information they need to address or cope with their problems</li>
        <li>Usually structured with specific topics to cover</li>
      </ul>
    </div>

    <div class="panel panel_4">
      <h1 class="panel_header">Process Oriented</h1>
      <p>Groups that are focused on the experience of users sharing with each other. These groups discussion driven, seldom having a set agenda.</p>
    </div>

    <div class="panel panel_5">
      <h1 class="panel_header">Problems we solve:</h1>
      <ol>
        <li>Anonymity / Confidentiality</li>
        <li>Ease of Attendance</li>
        <li>Separation of concerns</li>
      </ol>
    </div>
  </div>
  );
  }
}

export default Splash;
