import * as actions from '../actions/index.js';

const arduinoState = {
  fade_millisec: 1000
};

const arduino = (state = arduinoState, action) => {
  switch (action.type) {
    case actions.FADE_TIME:
      return {
        ...state,
        fade_millisec: action.millisec
      };
    default:
      return state;
  }
};

export default arduino;
