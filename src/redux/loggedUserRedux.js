export const getLogStatus = state => state.logged.status;
export const getUserData = state => state.logged.user;

// actions
const createActionName = actionName => `app/login/${actionName}`;
const UPDATE_LOGGED_STATUS = createActionName('UPDATE_LOGGED_STATUS');
const ADD_USER_LOGGED = createActionName('ADD_USER_LOGGED');
const REMOVE_USER_LOGOUT = createActionName('REMOVE_USER_LOGOUT');

//action creators
export const updateLoggedStatus = payload => ({ type: UPDATE_LOGGED_STATUS, payload });
export const updateUserData = payload => ({ type: ADD_USER_LOGGED, payload });
export const removeUserData = payload => ({ type: REMOVE_USER_LOGOUT, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_LOGGED_STATUS:
      return { ...statePart, status: action.payload };
    case ADD_USER_LOGGED:
      return { ...statePart, user: [...statePart.user, { ...action.payload }] };
    case REMOVE_USER_LOGOUT:
      return {
        ...statePart,
        user: statePart.user.filter(user => user.email !== action.payload),
      };
    default:
      return statePart;
  }
}
