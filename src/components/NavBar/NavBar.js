import React, { Component } from 'react';

import './NavBar.css';
import NavDropdown from './NavDropdown';
import NavItems from './NavItems';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: 'closed'
    };

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(prevState => ({
      toggleMenu: prevState.toggleMenu == 'open' ? 'closed' : 'open'
    }));
  }

  render() {
    return(
      <nav className={"NavBar " + this.state.toggleMenu}>
        <button className="NavBar-toggle-menu" onClick={this.handleToggleMenu}>&#9776;</button>
        <div className="NavBar-left NavBar-company-name">
          {this.props.menu.companyName}
        </div>
        <div className="NavBar-right">
          <NavItems items={this.props.menu.items}/>
          <NavDropdown dropdown={this.props.menu.dropdown}/>
        </div>
      </nav>
    )
  }
}

export default NavBar;
