import React, { Component  } from "react";
import './index.css';

class Experinace extends Component {
  constructor() {
    super();
    this.state = {
      experiances: [
        { id: Math.random(), topic: "MEAN Stack", text: "discription" },
        { id: Math.random(), topic: "MERN Stack", text: "discription" },
        { id: Math.random(), topic: "PWA Apps", text: "discription" },
      ]
    }
  }

  getExperiances = (experiance) => {
    return (
      <div key={experiance.id} className="col-md-4 col-sm-6 col-xs-12 experiance">
        <div className="experiance-wrapper">
          <span>{experiance.topic}</span>
          <p>{experiance.text}</p>
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
              <h4 className="section-header">Experiances</h4>
            </div>
            <div className="col-xs-12 content">
              <h2 className="content-topic">Experiance</h2>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div className="bt-row">
                {this.state
                  .experiances.map(experiance => this.getExperiances(experiance))}
              </div>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experinace;
