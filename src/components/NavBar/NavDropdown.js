import React, { Component } from 'react';

import profile from './profile.svg';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownStatusClass: 'closed',
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleGlobalClick =this.handleGlobalClick.bind(this);
  }

  handleDropdownClick() {
    this.setState(prevState => ({
      dropdownStatusClass: prevState.dropdownStatusClass == 'open' ? 'closed' : 'open'
    }));
    document.addEventListener('click', this.handleGlobalClick);
  }
  
  handleGlobalClick() {
    this.setState(prevState => ({
      dropdownStatusClass: 'closed'
    }));
    document.removeEventListener('click', this.handleGlobalClick);
  }

  renderDropdownItems() {
    let key = 0;
    let num;
    return this.props.dropdown.map(item => {
      num = (item.num !== undefined) ? (<span className="num">23</span>) : undefined;
      key++;
      return (
        <li key={key}>
          <a href={item.to}>
            {item.text}
            {num}
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <div className={"NavBar-dropdown " + this.state.dropdownStatusClass}  onClick={this.handleDropdownClick}>
        <img src={profile} className="NavBar-dropdown-icon" alt="profile" />
        <ul>
          {this.renderDropdownItems()}
        </ul>
      </div>
    )
  }
}

export default NavDropdown;
