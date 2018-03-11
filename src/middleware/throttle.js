import { CALL_API } from './api';

const throttled = {};

const throttler = () => next => action => {
  const time = action[CALL_API] && action.meta && action.meta.throttle;

  if (!time) return next(action);

  if (throttled[CALL_API]) {
    return;
  }
  throttled[CALL_API] = true;

  setTimeout(() => {
    throttled[CALL_API] = false;
  }, time);

  return next(action);
};

export default throttler;
