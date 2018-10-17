import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux';
import View from './app/components/view';
import Promise from 'promise-polyfill';
import './styles/base.scss';

const store = configureStore();

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
    <Provider store={store} >
    <BrowserRouter>
      <div className="app-container" style={{ height: '100%' }} >
        <View />
      </div>
    </BrowserRouter>
  </Provider>,
    document.querySelector('#root')
);
