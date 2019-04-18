import { createSelector } from 'reselect';

const getSortField = state => state.sortField;
const getComments = state => state.comments;
const getSearchQuery = state => state.searchQuery;

const sorted = (payload, sortField) => [...payload].sort((a, b) => {
  let [first, second] = [b[sortField], a[sortField]];

  if (sortField === 'DateAdded') {
    first = new Date(first);
    second = new Date(second);
  }

  return sortField === 'DateAdded'
    ? (first > second) - (first < second)
    : first - second;
});

// Of course it should be developed by some of search engines for fulltext.
const search = (payload, searchQuery) => [...payload]
  .filter(comment => comment.Message.includes(searchQuery));

const getFilteredComments = createSelector(
  [getSortField, getSearchQuery, getComments],
  (sortField, searchQuery, comments) => {
    let response = comments;

    if (searchQuery) {
      response = search(comments, searchQuery);
    }
    if (sortField) {
      response = sorted(response, sortField);
    }

    return response;
  }
);

export default getFilteredComments;
