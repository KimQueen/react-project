import React, { ReactNode } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import './index.scss';

interface IProps {
  children: ReactNode;
  title: String;
}

const Layout = (props: IProps) => {
  const { children, title } = props;
  return (
    <div className="wrap">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <div className="pageTitle">{title}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
