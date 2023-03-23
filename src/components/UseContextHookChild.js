import React, { useContext } from "react";
import themeContext from "./UseContextHook";

function UseContextHookChild() {
  const currentTheme = useContext(themeContext);
  const backgroundColor = currentTheme === "light" ? "#FFFFFF" : "#000000";

  return (
    <div>
      <div style={{ backgroundColor }}>
        Background color based on the current context theme
      </div>
    </div>
  );
}
export default UseContextHookChild;
