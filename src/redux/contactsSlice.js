// contactsSlice.js

import { createAction, createReducer } from "@reduxjs/toolkit";

const initialContactsState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");

export const contactsReducer = createReducer(
  initialContactsState,
  (builder) => {
    builder
      .addCase("contacts/addContact", (state, action) => {
        state.items.push(action.payload);
      })
      .addCase("contacts/deleteContact", (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      });
  }
);
