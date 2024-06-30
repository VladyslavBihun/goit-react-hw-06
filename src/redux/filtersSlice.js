// filtersSlice.js

const initialFilterState = {
  name: "",
};

export const setFilter = (filter) => {
  return {
    type: "filters/setFilter",
    payload: filter,
  };
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case "filters/setFilter":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
