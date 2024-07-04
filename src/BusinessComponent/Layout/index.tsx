import React, { ReactNode } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import './index.scss';

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <div className="wrap">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
