import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IDarkModeState {
  isOn: boolean;
}

const initialState: IDarkModeState = {
  isOn: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isOn = !state.isOn;
    },
    setDarkMode(state, { payload }: PayloadAction<boolean>) {
      state.isOn = payload;
    },
  },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
