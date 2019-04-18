import { RECEIVE_COMMENTS } from '../Constants/actions';

const setCommentId = store => next => action => {
  const { type, payload } = action;
  let id = 1;

  if (type !== RECEIVE_COMMENTS) {
    return next(action);
  }

  payload.forEach(comment => {
    comment.Id = id++;
  });

  return next(action);
};

export default setCommentId;
