import React from 'react';
import ReactDOM from 'react-dom';
import { Router, NavLink } from "react-router-dom";
import TestUtils from "react-dom/test-utils";
import expect from 'expect';

import NavBar from '../../../components/NavBar/NavBar';
import data from '../../../data';

describe('NavBar', () => {

  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar menu={data}/>, div);
  });

  it('should render the company name', () => {
    const data = {
      companyName: "CocaCola",
      items: [{ to: "/", text: "Dashboard" }],
      dropdown: [{to: "#",text: "My profile"}]
    };
    const component = TestUtils.renderIntoDocument(<NavBar menu={data}/>);
    const itemsNode = ReactDOM.findDOMNode(component).querySelector(".NavBar-company-name");
    expect(itemsNode.firstChild.textContent).toEqual('CocaCola');
  });
})
