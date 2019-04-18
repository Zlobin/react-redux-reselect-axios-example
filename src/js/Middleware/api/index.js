import cache from '../../Utils/cache';
import requestComments from './requests/comments';

const apiMap = {
  comments: requestComments
};

const api = store => next => action => {
  const { type } = action;
  const isFetchingAction = type.startsWith('FETCH');
  const isReceiveAction = type.startsWith('RECEIVE');

  // Handle FETCH AND RECEIVE actions only.
  if (!isFetchingAction && !isReceiveAction) {
    return next(action);
  }

  const [, typeAction] = type.split('_');
  const cachePrefix = 'appcache_';
  const apiRequestItem = typeAction.toLowerCase();
  const key = `${ cachePrefix }_${ apiRequestItem }`;
  const { dispatch } = store;

  if (!apiRequestItem) {
    return next(action);
  }

  if (isReceiveAction) {
    // Caching data.
    cache.setItem(key, action.payload);
    return next(action);
  }

  // Cached data.
  const payload = cache.getItem(key);

  if (isFetchingAction && !payload) {
    apiMap[apiRequestItem](dispatch);
    return next(action);
  }

  return dispatch({
    type: `RECEIVE_${typeAction}`,
    payload
  });
};

export default api;
