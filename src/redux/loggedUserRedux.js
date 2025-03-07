export const getLogStatus = state => state.logged.status;
export const getUserData = state => state.logged.user;

// actions
const createActionName = actionName => `app/login/${actionName}`;
const UPDATE_LOGGED_STATUS = createActionName('UPDATE_LOGGED_STATUS');
const UPDATE_LOGGED_USER = createActionName('UPDATE_LOGGED_USER');

//action creators
export const updateLoggedStatus = payload => ({ type: UPDATE_LOGGED_STATUS, payload });
export const updateUserData = payload => ({ type: UPDATE_LOGGED_USER, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_LOGGED_STATUS:
      return { ...statePart, status: action.payload };
    case UPDATE_LOGGED_USER:
      return { ...statePart, user: action.payload };
    default:
      return statePart;
  }
}
