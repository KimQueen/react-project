import React, { useState } from 'react';
import Menu from 'src/BusinessComponent/Menu';
import './index.scss';

const MenuShow = () => {
  const [state, setState] = useState(0);
  return (
    <div className="">
      <Menu />
    </div>
  );
};

export default MenuShow;
