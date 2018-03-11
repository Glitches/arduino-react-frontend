import * as actions from '../actions/index.js';

const arduinoState = {
  fade_millisec: 1000,
  strobe_on: false,
  strobe_endpoint: '/'
};

const arduino = (state = arduinoState, action) => {
  switch (action.type) {
    case actions.FADE_TIME:
      return {
        ...state,
        fade_millisec: action.millisec
      };
    case actions.STROBE_ON:
      return {
        ...state,
        strobe_on: !state.strobe_on,
        strobe_endpoint: state.strobe_on ? '/' : '/off'
      };
    default:
      return state;
  }
};

export default arduino;
