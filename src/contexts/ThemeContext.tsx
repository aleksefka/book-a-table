import {
  createContext,
  useContext,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { theme, type Theme } from "../theme";

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
