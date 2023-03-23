import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    // focus the input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UseRefHook;
