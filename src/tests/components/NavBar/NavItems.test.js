import React from 'react';
import ReactDOM from 'react-dom';
import { Router, NavLink } from "react-router-dom";
import TestUtils from "react-dom/test-utils";
import expect from 'expect';

import NavItems from '../../../components/NavBar/NavItems';
import data from '../../../data';

describe('NavItems', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavItems items={data.items}/>, div);
  });

  it('should render items', () => {
    const component = TestUtils.renderIntoDocument(<NavItems items={data.items}/>);
    const itemsNode = ReactDOM.findDOMNode(component).querySelector(".NavBar-link");
    expect(itemsNode).toExist();
  });

  it('should render first item with the text Home', () => {
    const data = {
      items: [
        {
          to: "/",
          text: "Home"
        },
      ]
    }
    const component = TestUtils.renderIntoDocument(<NavItems items={data.items}/>);
    const itemsNode = ReactDOM.findDOMNode(component).querySelector(".NavBar-link");
    expect(itemsNode.firstChild.textContent).toEqual('Home');
  });
})
