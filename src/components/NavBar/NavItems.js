import React, { Component } from 'react';
import { BrowserRouter, NavLink } from "react-router-dom";

class NavItems extends Component {

  renderItems() {
    let key = 0;
    return this.props.items.map(item => {
      key++;
      return (
        <li key={key}>
          <NavLink exact to={item.to} activeClassName="active" className="NavBar-link">{item.text}</NavLink>
        </li>
      )
    });
  }

  render() {
    return (
      <BrowserRouter>
          <ul className="NavBar-main-menu">
            {this.renderItems()}
          </ul>
      </BrowserRouter>
    )
  }
}

export default NavItems;
