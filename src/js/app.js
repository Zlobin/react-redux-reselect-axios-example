import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Containers/App';

import '../scss/index.css';

window.TestApp = {
  init: async () => {
    const storeLoad = () => import('./Store/configure-store');
    const { default: store } = await storeLoad();

    render(
      <Provider store={ store() }>
        <App />
      </Provider>,
      document.getElementById('app')
    );
  }
};
