import React, { useState, useEffect } from "react";

function HoverMessge({ message, children }) {
  const [showtooltip, setShowtooltip] = useState(false);

  useEffect(() => {
    function handleMouseOver() {
      setShowtooltip(true);
    }
    function handleMouseOut() {
      setShowtooltip(false);
    }

    const button = document.querySelector("button");
    button.addEventListener("mouseover", handleMouseOver);
    button.addEventListener("mouseout", handleMouseOut);
    return () => {
      button.removeEventListener("mouseover", handleMouseOver);
      button.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div>
      <button>{children} </button>
      {showtooltip && <div> {message}</div>}
    </div>
  );
}

export default HoverMessge;
