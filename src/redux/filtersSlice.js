// filtersSlice.js

import { createAction, createReducer } from "@reduxjs/toolkit";

const initialFilterState = {
  name: "",
};

export const setFilter = createAction("filters/setFilter");

export const filterReducer = createReducer(initialFilterState, (builder) => {
  builder.addCase("filters/setFilter", (state, action) => {
    state.name = action.payload;
  });
});
