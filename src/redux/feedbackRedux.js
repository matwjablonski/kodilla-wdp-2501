export const getAllFeedback = ({ feedback }) => feedback;

export default function feedbackReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
