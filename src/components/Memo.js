import React, { memo } from "react";

function Memo({ items }) {
  items = ["python", "java", "javascript"];
  return (
    <div>
      {items.map((item, index) => (
        <h1 key={index}> {item} </h1>
      ))}
    </div>
  );
}

const areEqual = (prevProps, nextProps) => {
  console.log(prevProps.items.length === nextProps.items.length);
};

export default memo(Memo, areEqual);

// import React from "react";

// function Memo(props) {
//   return (
//     <div>
//       {props.name}
//       {props.age}
//     </div>
//   );
// }

// export default React.memo(Memo);
