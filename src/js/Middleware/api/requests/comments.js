import comments from '../../../Services/request/comments';
import {
  receiveComments,
  errorFetchComments
} from '../../../Actions/app';

const requestComments = async dispatch => {
  const isValidResponse = payload => payload && payload.length > 0;
  const { data, error } = await comments.fetch();

  dispatch(isValidResponse(data) && !error
    ? receiveComments(data)
    : errorFetchComments(`Error when fetching comments. ${error}`));
};

export default requestComments;
