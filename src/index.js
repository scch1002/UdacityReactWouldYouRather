import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Thunk from 'redux-thunk';

const store = createStore(reducer, 
    compose(applyMiddleware( Thunk ), 
    window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
