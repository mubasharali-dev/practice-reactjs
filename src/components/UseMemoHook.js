import React, { useState, useMemo } from "react";

function UseMemoHook({ prop1, prop2 }) {
  const [stateFirst, setStateFirst] = useState(0);

  const complexState = useMemo(() => {
    const result = prop1 * prop2 + stateFirst;
    return result;
  }, [prop1, prop2, stateFirst]);

  const incrementOne = () => {
    setStateFirst(stateFirst + 1);
  };
  return (
    <div>
      <p> Prop:1 = {prop1} </p>
      <p> Prop:2 = {prop2} </p>
      <p> State = {stateFirst} </p>
      <p> Complex Value: {complexState}</p>
      <button onClick={incrementOne}>Increment One</button>
    </div>
  );
}
export default UseMemoHook;

// import React, { useState, useMemo } from "react";

// function UseMemoHook() {
//   const [counterOne, setCounterOne] = useState(0);
//   const [counterTwo, setCounterTwo] = useState(0);

//   const incrementOne = () => {
//     setCounterOne(counterOne + 1);
//   };

//   const incrementTwo = () => {
//     setCounterTwo(counterTwo + 1);
//   };

//   const isEven = useMemo(() => {
//     let i = 0;
//     while (i < 5000000) i++;
//     return counterOne % 2 === 0;
//   }, [counterOne]);
//   return (
//     <div>
//       <button onClick={incrementOne}>Counter one - {counterOne} </button>
//       <span>{isEven ? "Even" : "Odd"}</span>
//       <button onClick={incrementTwo}>Counter Two - {counterTwo} </button>
//     </div>
//   );
// }

// export default UseMemoHook;
