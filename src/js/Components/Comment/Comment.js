import React from 'react';
import PropTypes from 'prop-types';

function Comment({
  UserName,
  Message,
  IsPositive,
  DateAdded,
  Comments
}) {
  const { Comment: answer, DateAdded: answerDate } = Comments[0] || {};

  return (
    <div className={`comment comment_${IsPositive ? 'positive' : 'negative'}`}>
      <div className="comment__body">
        <span className="comment__body-username">{UserName}</span>
        <time dateTime={DateAdded}>{DateAdded}</time>
        <div className="comment__body-message">{Message}</div>
      </div>
      {answer && <div className="comment__answer">
          <time dateTime={answerDate}>{answerDate}</time>
          <div className="comment__answer-message">{answer}</div>
        </div>
      }
    </div>
  );
}

Comment.propTypes = {
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
};

export default Comment;
