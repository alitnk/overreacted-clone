import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { isOn: false };

export const toggleAction = createAction("toggle");
export const setDarkModeAction = createAction<boolean>("set-dark-mode");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleAction, (state) => {
    state.isOn = !state.isOn;
  });
  builder.addCase(setDarkModeAction, (state, { payload }) => {
    state.isOn = payload;
  });
});
