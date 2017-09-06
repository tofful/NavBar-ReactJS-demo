import React from 'react';
import ReactDOM from 'react-dom';
import { Router, NavLink } from "react-router-dom";
import expect from 'expect';

import NavDropdown from '../../../components/NavBar/NavDropdown';
import data from '../../../data';

describe('NavDropdown', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavDropdown dropdown={data.dropdown}/>, div);
  });
})
