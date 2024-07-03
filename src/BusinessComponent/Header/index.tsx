import React, { useState } from 'react';
import './index.scss';

const page = () => {
  const [state, setState] = useState(0);
  return (
    <div className="warpContent-header">
      <div className="left">1</div>
      <div className="content">2</div>
      <div className="right">3</div>
    </div>
  );
};

export default page;
