import React, { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuConfig } from './config';
import './index.scss';

const page = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={menuConfig}
    />
  );
};

export default page;
