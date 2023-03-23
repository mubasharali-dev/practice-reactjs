import React from "react";
import UseContextHookChild from "./UseContextHookChild";
const themeContext = React.createContext("light");
function UseContextHook() {
  return (
    <div>
      <themeContext.Provider value="dark">
        <UseContextHookChild />
      </themeContext.Provider>
    </div>
  );
}

export default UseContextHook;
