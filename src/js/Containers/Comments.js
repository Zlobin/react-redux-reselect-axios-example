import React from 'react';
import { connect } from 'react-redux';

import { loadMore } from '../Actions/app';
import CommentsComponent from '../Components/Comment/Comments';
import getFilteredComments from '../Selectors';

function Comments(props) {
  return <CommentsComponent {...props} />;
}

const applyPage = (payload, currentPage) => {
  const byPage = 50;
  const from = 0; // currentPage - 1) * byPage;
  const to = (currentPage - 1) * byPage + byPage;

  return [payload.slice(from, to), to <= payload.length];
};

const mapStateToProps = ({ app }) => ({
  comments: applyPage(getFilteredComments(app), app.currentPage),
  currentPage: app.currentPage
});

const mapDispatchToProps = dispatch => ({
  onLoadMode: () => dispatch(loadMore())
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
