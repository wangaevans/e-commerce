import { createContext } from "react";

type defaultValuesTypes = {
  currentTheme: string | null;
  toggleTheme: (newTheme: "light" | "dark") => void;
};
const defaultValue: defaultValuesTypes = {
  currentTheme: "light",
  toggleTheme: () => {},
};
const ThemeContext = createContext(defaultValue);
export default ThemeContext;
