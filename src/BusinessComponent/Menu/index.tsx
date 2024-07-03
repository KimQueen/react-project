import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { menuConfig } from './config';
import './index.scss';

const MenuShow = () => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    const { key } = e;
    const url = `/component/${key}`;
    navigate(url);
  };
  return (
    <Menu
      className="menuHeight"
      theme="dark"
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={menuConfig}
    />
  );
};

export default MenuShow;
