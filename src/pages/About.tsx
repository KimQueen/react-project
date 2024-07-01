import React, { useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};

export default About;
