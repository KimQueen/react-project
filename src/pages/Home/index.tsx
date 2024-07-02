import React, { useState } from 'react';
import './index.scss';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="homePageWrapper">
      <div className="title">应用组件库</div>
    </div>
  );
};

export default HomePage;
