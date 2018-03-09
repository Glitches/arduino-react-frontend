import { CALL_API } from '../middleware/api';

export const FADE_REQUEST = 'FADE_REQUEST';
export const FADE_SUCCESS = 'FADE_SUCCESS';
export const FADE_FAILURE = 'FADE_FAILURE';

export const fadeLed = data => ({
  [CALL_API]: {
    types: [FADE_REQUEST, FADE_SUCCESS, FADE_FAILURE],
    endpoint: '/fade',
    method: 'GET'
  }
});

export const LOGOUT_USER = 'LOGOUT_USER';

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const SET_USER = 'SET_USER';

export const setUser = data => ({
  type: SET_USER,
  data
});

export const goToUser = userId => ({
  type: 'SELECT_USER',
  userId
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
