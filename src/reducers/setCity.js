const initialState = {
  search: "MATHURA",
  city: {},
};

export const setCity = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return Object.assign({}, state, { search: action.payload.search });
    case "Fetch_Weather":
      return Object.assign({}, state, {
        city: action.payload,
      });
    default:
      return action;
  }
};
