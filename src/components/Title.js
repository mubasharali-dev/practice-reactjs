import React from "react";

function Title() {
  console.log(`Rendering title`);
  return <div>Use callback hook</div>;
}

export default React.memo(Title);
