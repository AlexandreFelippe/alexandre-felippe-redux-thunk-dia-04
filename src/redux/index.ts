import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import GOTReducer from './reducer/GOTReducer';

const store = createStore(
  GOTReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;