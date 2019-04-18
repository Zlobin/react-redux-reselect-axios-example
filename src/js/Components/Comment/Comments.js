import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Comment from './Comment';

function Comments({
  comments,
  onLoadMode,
  currentPage
}) {
  const [payload, hasMore] = comments;

  return (
    <div className="comments">
      <InfiniteScroll
        pageStart={currentPage}
        loadMore={onLoadMode}
        hasMore={payload ? hasMore : false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
      >
        {(payload || []).map(comment => <Comment key={comment.Id} {...comment} />)}
      </InfiniteScroll>
    </div>
  );
}

Comments.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onLoadMode: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      UserName: PropTypes.string.isRequired,
      Message: PropTypes.string.isRequired,
      IsPositive: PropTypes.bool.isRequired,
      DateAdded: PropTypes.string.isRequired,
      Comments: PropTypes.arrayOf(
        PropTypes.shape({
          DateAdded: PropTypes.string,
          Comment: PropTypes.string
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default Comments;
