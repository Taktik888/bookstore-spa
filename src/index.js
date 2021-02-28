import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import AppContainer from './containers/AppContainer';
import create from './store';

const store = create();

ReactDOM.render(
  <Provider store={store}>
   
      <AppContainer  />
    
  </Provider>,
  document.getElementById('root')
  
);


