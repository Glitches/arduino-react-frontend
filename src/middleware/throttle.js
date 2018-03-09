import { CALL_API } from './api';

const throttled = {};

const throttler = () => next => action => {
  const time = action[CALL_API] && action.meta && action.meta.throttle;
  console.log(throttled);
  console.log(action);

  if (!time) return next(action);

  if (throttled[CALL_API]) {
    console.log('action true');
    return;
  }
  throttled[CALL_API] = true;

  setTimeout(() => {
    console.log('here');
    throttled[CALL_API] = false;
  }, time);

  return next(action);
};

export default throttler;
