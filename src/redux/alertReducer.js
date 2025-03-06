/* selectors */
export const getAlertStatus = state => state.alert.showAlert;
export const getAlertMessage = state => state.alert.alertMessage;

// actions
const createActionName = actionName => `app/alert/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');
const UPDATE_MESSAGE = createActionName('UPDATE_MESSAGE');

//action creators
export const updateAlertStatus = payload => ({ type: UPDATE_STATUS, payload });
export const updateAlertMessage = payload => ({ type: UPDATE_MESSAGE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...statePart, showAlert: action.payload };
    case UPDATE_MESSAGE:
      return { ...statePart, alertMessage: action.payload };
    default:
      return statePart;
  }
}
