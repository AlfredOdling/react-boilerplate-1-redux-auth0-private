import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import app_reducer from './reducers/app';
import login_reducer from './reducers/login';
import user_reducer from './reducers/user';

import thunk from 'redux-thunk';

export default function configureStore(initialState = {}, history) {


  let middlewares = [
    routerMiddleware(history),
    thunk
  ]
  const applied_middleware = [applyMiddleware(...middlewares)];


  let all_reducers = combineReducers({
    app: app_reducer,
    login: login_reducer,
    user: user_reducer
  })

  const store = createStore(
    all_reducers,
    compose(...applied_middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
  );


  return store;
}
