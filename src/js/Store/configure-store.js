import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import api from '../Middleware/api';
import setCommentId from '../Middleware/setCommentId';
import rootReducer from '../Reducers';

const enhancer = compose(
  applyMiddleware(
    // logger, cache etc.
    api,
    setCommentId
  )
);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
