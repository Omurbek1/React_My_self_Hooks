import React from "react";
import useTheme from "../hooks/useTheme";

function UseThemeExample() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default UseThemeExample;
