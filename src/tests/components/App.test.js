import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

import App from '../../components/App';

describe('App', () => {

  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})

