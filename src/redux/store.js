//store.js

import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialContactsState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const initialFilterState = {
  name: "",
};

export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: contact,
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const setFilter = (filter) => {
  return {
    type: "filters/setFilter",
    payload: filter,
  };
};

const filterReducer = (state = initialFilterState, action) => {
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

const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
