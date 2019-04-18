function LoadMore(state) {
  return {
    ...state,
    currentPage: ++state.currentPage,
    isChunk: true
  };
}

function SortBy(state, payload) {
  const { field: sortField } = payload;

  return {
    ...state,
    sortField,
    isChunk: false
  };
}

function Search(state, payload) {
  const { query: searchQuery } = payload;

  return {
    ...state,
    searchQuery,
    isChunk: false
  };
}

function ReceiveComments(state, payload) {
  return {
    ...state,
    isInitialized: true,
    comments: payload
  };
}

export {
  SortBy,
  LoadMore,
  Search,
  ReceiveComments
};
