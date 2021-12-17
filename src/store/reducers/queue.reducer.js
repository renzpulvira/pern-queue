let queueInit = [];

export default function queueReducer(state = queueInit, action) {
  switch (action.type) {
    case "UPDATE_QUEUE":
      return [...state, action.payload];
    default:
      return state;
  }
}
