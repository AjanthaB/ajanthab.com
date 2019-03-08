import React from 'react';
import './index.css';

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      educations: [
        { id: Math.random(), topic: "MEAN Stack", text: "discription" },
        { id: Math.random(), topic: "MERN Stack", text: "discription" },
        { id: Math.random(), topic: "PWA Apps", text: "discription" },
      ]
    }
  }

  getAwords = (education) => {
    return (
      <div key={education.id} className="col-md-4 col-sm-6 col-xs-12 aword">
        <div className="aword-wrapper">
          <span>{education.topic}</span>
          <p>{education.text}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="bt-row awords">
        <div className="col-xs-12">
          <div className="bt-row">
            <div className="col-xs-12">
              <h4 className="section-header">Education</h4>
            </div>
            <div className="col-xs-12 content">
              <h2 className="content-topic">Education</h2>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div className="bt-row">
                {this.state.educations.map(education => this.getAwords(education))}
              </div>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Education;
