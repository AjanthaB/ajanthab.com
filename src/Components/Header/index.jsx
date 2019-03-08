import React from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false}
  }

  toggleMenu = () => {
    this.setState({active: !this.state.active});
    console.log(this.state);
  }

  redirectToHome = () => window.location.reload();

  getButton = (active) => (active) ? <FontAwesomeIcon size="2x" icon={faTimes} /> : <FontAwesomeIcon size="2x" icon={faBars} />;

  render() {
    return (
      <div className="bt-row header">
        <div className="col-xs-4 h-left">
          <span onClick={this.redirectToHome} className="name">AjanthaB</span>
        </div>
        <div className="col-xs-4"></div>
        <div className="col-xs-4 h-right">
          <button onClick={this.toggleMenu} className="menu-icon">
            {this.getButton(this.state.active)}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;