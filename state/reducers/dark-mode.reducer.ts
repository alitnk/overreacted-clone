import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { isOn: false };

export const toggleAction = createAction("TOGGLE");
export const setDarkModeAction = createAction<boolean>("SET_DARK_MODE");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleAction, (state) => {
    state.isOn = !state.isOn;
  });
  builder.addCase(setDarkModeAction, (state, { payload }) => {
    state.isOn = payload;
  });
});
