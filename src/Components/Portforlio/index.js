import React from 'react';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolios: [
        { id: Math.random(), topic: "MEAN Stack", text: "discription" },
        { id: Math.random(), topic: "MERN Stack", text: "discription" },
        { id: Math.random(), topic: "PWA Apps", text: "discription" },
      ]
    }
  }

  getPortfolio = (portfolio) => {
    return (
      <div key={portfolio.id} className="col-md-4 col-sm-6 col-xs-12 aword">
        <div className="aword-wrapper">
          <span>{portfolio.topic}</span>
          <p>{portfolio.text}</p>
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
              <h4 className="section-header">Portfolio</h4>
            </div>
            <div className="col-xs-12 content">
              <h2 className="content-topic">Portfolio</h2>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div className="bt-row">
                {this.state.portfolios.map(portfolio => this.getPortfolio(portfolio))}
              </div>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
