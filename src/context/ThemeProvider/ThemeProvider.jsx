import React, { useState, createContext } from "react";
import UserProvider from "../UserProvider/UserProvider";

export const ThemeContext = createContext({});

const ThemeProvider = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeData = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <UserProvider />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
