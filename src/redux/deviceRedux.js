// ACTIONS
const SET_DEVICE_MODE = 'app/device/SET_DEVICE_MODE';

// ACTION CREATORS
export const setDeviceMode = (mode) => ({
  type: SET_DEVICE_MODE,
  payload: mode,
});

// INITIAL STATE
const initialState = {
  mode: 'desktop',
};

// REDUCER
const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default deviceReducer;
