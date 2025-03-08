/* selectors */
export const getComparedFullProducts = ({ compareFull }) => compareFull;

// actions
const createActionName = actionName => `app/comparefULL/${actionName}`;
const UPDATE_FULL_COMPARE = createActionName('UPDATE_FULL_COMPARE');

//action creators
export const updateFullCompare = payload => ({ type: UPDATE_FULL_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_FULL_COMPARE:
      return action.payload;
    default:
      return statePart;
  }
}
