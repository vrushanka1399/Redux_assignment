function counterReducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "incrementByValue":
      return state + action.payload;

    case "decrementByValue":
      return state - action.payload;

    default:
      return state;
  }
}

export default counterReducer;