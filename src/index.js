import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from './store';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
// Our custom react components
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/* Configure Redux Store */
const { store, history } = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route path="/" component={App}>

      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
