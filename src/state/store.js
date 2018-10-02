import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';                                  // add
import { all } from 'redux-saga/effects';

import { counterActions, counterReducers, counterSagas } from './counter';
import { todoListActions, todoListReducers } from './todo-list';

export const actions = {
    counterActions,
    todoListActions
}

const reducers = combineReducers({
    counter: counterReducers,
    todoList: todoListReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));   // change

  function* rootSaga() {                                                      // add
      yield all([                                                             // add
          ...counterSagas                                                     // add
      ])                                                                      // add
  }                                                                           // add
  sagaMiddleware.run(rootSaga);                                               // add

  return store;
};

const store = configureStore();

export default store;