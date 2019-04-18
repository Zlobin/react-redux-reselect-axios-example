import {
  SORT_BY,
  SEARCH,
  LOAD_MORE,
  FETCH_COMMENTS,
  ERROR_COMMENTS,
  RECEIVE_COMMENTS
} from '../Constants/actions';

const sortBy = field => ({
  type: SORT_BY,
  payload: {
    field
  }
});

const loadMore = () => ({
  type: LOAD_MORE
});

const search = query => ({
  type: SEARCH,
  payload: {
    query
  }
});

const fetchComments = () => ({
  type: FETCH_COMMENTS
});

const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload
});

const errorFetchComments = error => ({
  type: ERROR_COMMENTS,
  error
});

export {
  sortBy,
  loadMore,
  search,
  fetchComments,
  receiveComments,
  errorFetchComments
};
