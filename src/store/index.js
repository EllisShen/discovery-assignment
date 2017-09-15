import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';
import rootSaga from '../sagas';
import DevTools from '../components/DevTools';

export default function configureStore() {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0

  // React-saga init
  const sagaMiddleware = createSagaMiddleware();

  // Add the reducer to your store on the `routing` key
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
    compose(
      // Middleware you want to use in development:
      // applyMiddleware(d1, d2, d3),
      applyMiddleware(sagaMiddleware),
      // Required! Enable Redux DevTools with the monitors you chose
      DevTools.instrument()
    )
  )

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store)

  // Start saga
  sagaMiddleware.run(rootSaga);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return { store, history };
}
