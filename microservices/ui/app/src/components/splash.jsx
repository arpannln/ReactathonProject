import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/splash.css';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }


render () {
  return (
  <div>
    <div className="panel panel_1">
      <h1 className="panel_header">We're Not Alone</h1>
      <p className="panel_1_quote">“The best part about being with a group is that you don’t have to do everything alone.”</p>
      <a data-scroll href="#panel_2">Learn More</a>
    </div>

    <div className="panel panel_2" id="panel_2">
      <h1 className="panel_header">Our Mission</h1>
      <p>
        The mission of NotAlone is to foster communication and to benefit society and improve the lives and mental wellness of people all over the globe. Group therapy is a proven method to manage mental health conditions and NotAlone aims to make this tool available to people anytime, anywhere.
      </p>
      <br></br>
      <p>
        It can be easy to slide into isolation when we’re feeling down, especially for those suffering from an invisible illness or problem, but this is the exact opposite of the action that is most likely to help us climb out of that pit. Loneliness and isolation tend to breed more loneliness and isolation, but making the (often difficult or exhausting) effort to connect with others is just the thing we may need to start feeling better.
      </p>
      <br></br>
      <p>
        “Some of the most comforting words in the universe are ‘me too.’ That moment when you find out that your struggle is also someone else’s struggle, that you’re not alone, and that others have been down the same road.”
      </p>
    </div>

    <div className="panel panel_3">
      <h1 className="panel_header">Why Group Therapy?</h1>
      <div>
        <ul> There are two types of group therapy, psychoeducational and process oriented.
          <li>With psychoeducational therapy a group provides its members with the information they need to address or cope with their problems.</li>
          <li>With process oriented therapy, groups are focused on sharing their experiences with each other. These groups discussion driven, seldom having a set agenda.</li>
        </ul>
      </div>
    </div>

    <div className="panel panel_4">
      <h1 className="panel_header">What We do</h1>
      <p>Group therapy available anytime, anywhere available at the click of a button. Group therapy is an incredibly powerful tool, and at NotAlone we believe it could be made more accessible by connecting people over the web.</p>
    </div>

    <div className="panel panel_5">
      <h1 className="panel_header">Problems we solve:</h1>
      <div>
        <ol> Three of the guiding principles of group therapy are Confidentiality, Universality, and Participation. By putting our services on the web NotAlone is uniquely able to address these concerns.
          <li>Member confidentiality is conserved by pairing users with each other potentially hundreds of miles away from everyone they know.</li>
          <li>Universality has to deal with members realizing that they are not alone, and that their suffering is universal. By connecting with users from all over the planet, users can see that their problems are universal and that they are truly not alone.</li>
          <li>Finally participation is one of the most important aspects of group therapy. Even the best treatment doesn't work if you don't use it. Sometimes the hardest part of getting help can be getting out the door. When you use NotAlone you can get help on your own time wherever you happen to be.</li>
        </ol>
      </div>
    </div>
  </div>
  );
  }
}

export default Splash;
