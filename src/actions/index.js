import { CALL_API } from '../middleware/api';

export const FADE_REQUEST = 'FADE_REQUEST';
export const FADE_SUCCESS = 'FADE_SUCCESS';
export const FADE_FAILURE = 'FADE_FAILURE';

export const fadeLed = fadeTime => ({
  [CALL_API]: {
    types: [FADE_REQUEST, FADE_SUCCESS, FADE_FAILURE],
    endpoint: '/fade?time=' + fadeTime,
    method: 'GET'
  },
  meta: {
    throttle: 1500
  }
});

export const STROBE_REQUEST = 'STROBE_REQUEST';
export const STROBE_SUCCESS = 'STROBE_SUCCESS';
export const STROBE_FAILURE = 'STROBE_FAILURE';

export const STROBE_ON = 'STROBE_ON';

export const strobeLed = strobe_endpoint => ({
  [CALL_API]: {
    types: [STROBE_REQUEST, STROBE_SUCCESS, STROBE_FAILURE],
    endpoint: strobe_endpoint,
    method: 'GET'
  },
  meta: {
    throttle: 1500
  }
});

export const FADE_TIME = 'FADE_TIME';

export const fadeTime = millisec => ({
  type: FADE_TIME,
  millisec
});

export const strobeOn = () => ({
  type: STROBE_ON
});

export const setEntities = data => ({
  type: 'SET_ENTITIES',
  data
});

export const navigate = screen => ({
  type: 'NAVIGATE',
  screen
});

export const navigateBack = () => ({
  type: 'NAVIGATE_BACK'
});

export const navigateLogin = () => ({
  type: 'NAVIGATE_LOGIN'
});

export const toggleDetails = () => ({
  type: 'TOGGLE_DETAILS'
});

export const closeCreateEventConfirmationAlert = () => ({
  type: 'CLOSE_CREATE_EVENT_CONF_ALERT'
});

export const closeCreateEventErrorAlert = () => ({
  type: 'CLOSE_CREATE_EVENT_ERR_ALERT'
});

export const closeEditEventConfirmationAlert = () => ({
  type: 'CLOSE_EDIT_EVENT_CONF_ALERT'
});

export const closeEditEventErrorAlert = () => ({
  type: 'CLOSE_EDIT_EVENT_ERR_ALERT'
});

export const disableReloadEvents = () => ({
  type: 'DISABLE_RELOAD_EVENTS'
});

export const setRatingUser = user => ({
  type: 'SET_RATE_USER',
  user
});

export const formProfilePage = (events, user) => ({
  type: 'FORM_PROFILE_PAGE',
  events,
  user
});
