import  React from 'react';
import './index.css'

class Works extends React.Component {

  constructor() {
    super();
    this.state = {works: [
      { id: Math.random(), topic: "MEAN Stack", text: "discription" },
      { id: Math.random(), topic: "MERN Stack", text: "discription" },
      { id: Math.random(), topic: "PWA Apps", text: "discription" },
      { id: Math.random(), topic: "Hybrid Mobile Apps", text: "discription" },
      { id: Math.random(), topic: "Desktop Apps", text: "discription" },
      { id: Math.random(), topic: "Micro Service", text: "discription"},
    ]}
  }

  getWork = (work) => {
    return (
      <div key={work.id} className="col-md-4 col-sm-6 col-xs-12 work">
        <div className="work-wrapper">
          <span>{work.topic}</span>
          <p>{work.text}</p>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className="bt-row works">
        <div className="col-xs-12">
          <div className="bt-row">
            <div className="col-xs-12">
              <h4 className="section-header">Work</h4>
            </div>
            <div className="col-xs-12 content">
              <h2 className="content-topic">What I do?</h2>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div className="bt-row">
                {
                  this.state
                    .works.map(work => this.getWork(work))
                }
              </div>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Works;
