import {
  SORT_BY,
  LOAD_MORE,
  SEARCH,
  RECEIVE_COMMENTS
} from '../../Constants/actions';
import * as mutations from './mutations';

const initialState = {
  comments: [],
  isInitialized: false,
  sortField: '',
  searchQuery: '',
  currentPage: 1,
  isChunk: false
};

const app = (state = initialState, action = {}) => {
  const { type, payload } = action;
  // transform ACTION_NAME => ActionName
  const mutationMethod = type.toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  switch (type) {
    case SORT_BY:
    case LOAD_MORE:
    case SEARCH:
    case RECEIVE_COMMENTS:
      return mutations[mutationMethod](state, payload);
    default:
      return state;
  }
};

export default app;
