import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkMode,
  toggleDarkMode,
} from "../../redux/slices/dark-mode.slice";
import { RootState } from "../../redux/store";
import { Moon } from "./Moon";
import { Sun } from "./Sun";

export const DARK_MODE_LOCAL_STORAGE_KEY = "darkMode";

export const DarkModeToggle = () => {
  const isDarkModeOn = useSelector((state: RootState) => state.darkMode.isOn);
  const dispatch = useDispatch();

  const toggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  useEffect(() => {
    const darkMode =
      localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) === "true";
    if (darkMode) dispatch(setDarkMode(true));
  }, [dispatch]);

  useEffect(() => {
    if (isDarkModeOn) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem(
      DARK_MODE_LOCAL_STORAGE_KEY,
      JSON.stringify(isDarkModeOn)
    );
  }, [isDarkModeOn]);

  return (
    <div>
      <Switch
        checked={isDarkModeOn}
        onChange={toggle}
        className="bg-black relative inline-flex flex-shrink-0 h-[24px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          aria-hidden="true"
          className={classNames(
            isDarkModeOn ? "translate-x-7" : "translate-x-0",
            "pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white focus:ring-2 shadow-lg transform ring-0 transition ease-in-out duration-200"
          )}
        />

        <span
          className={classNames(
            "absolute left-1 mt-0.5 transition-opacity",
            isDarkModeOn ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <Moon />
        </span>

        <span
          className={classNames(
            "absolute right-1 mt-0.5 transition-opacity",
            !isDarkModeOn ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <Sun />
        </span>
      </Switch>
    </div>
  );
};
