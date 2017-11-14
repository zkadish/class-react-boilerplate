import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';

let store = createStore(appReducer);

import App from './components/App.js';

import './scss/index.scss';

const title = 'my application';

ReactDom.render(
    <Provider store={store}>
        <App title={title} />
    </Provider>,
    document.getElementById('root')
);

