import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { isOn: true };

const toggle = createAction("toggle");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggle, (state) => {
    state.isOn = !state.isOn;
  });
});
