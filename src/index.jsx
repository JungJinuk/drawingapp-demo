import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import App from './App';

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'immutable', status: 'completed', editing: false})
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);