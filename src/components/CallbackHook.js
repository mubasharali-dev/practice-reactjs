import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function CallbackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  });
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  });
  return (
    <div>
      <Title />

      <Count type="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count type="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default React.memo(CallbackHook);
