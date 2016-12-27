import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import css
import 'tachyons/css/tachyons.css';
import './CSS/index.css'

// import store
import store from './store/configure-store';

// import components
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
