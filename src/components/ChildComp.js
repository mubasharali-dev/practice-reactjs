import React from "react";

function ChildComp(props) {
  return (
    <div>
      {props.name}
      {props.age}
    </div>
  );
}

export default ChildComp;
