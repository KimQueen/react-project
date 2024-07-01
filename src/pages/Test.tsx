import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      Test
    </div>
  );
};

export default Test;
