import React from 'react';
import './index.css'

class About extends React.Component {

  getProfileImage = () => {
    return (
      <img className="profile-img" alt="profile" src={process.env.PUBLIC_URL + '/ajantha.jpeg'} />
    )
  }
  render() {
    return (
      <div className="bt-row about">
        <div className="col-xs-12">
          <div className="bt-row">
            <div className="col-xs-12">
              <h4 className="section-header">About</h4>
            </div>
            <div className="col-xs-12 profile">
              {this.getProfileImage()}
            </div>
            <div className="col-xs-12 content">
              <h2 className="content-topic topic">I'am Ajantha Bandara</h2>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              Experienced and self-motivated software engineer with Computer Science and 
              Engineering background having 2+ years of experience in JavaScript/Java 
              development and proficient in the Web and Mobile application development.
              Dynamic personality, motivational team player with sound leadership skills 
              who seek to leverage extensive knowledge in software engineering concepts.
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;