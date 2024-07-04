import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgURL from '../../assets/header.png';
import gitUrl from '../../assets/git.jpeg';
import { tabConfig } from './config';
import './index.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };
  return (
    <div className="warpContent-header">
      <div className="left">
        <img src={imgURL} alt="图标" className="imgStyle" />
        <div className="title">Component</div>
      </div>
      <div className="content" />
      <div className="right">
        {tabConfig.map((item) => (
          <div onClick={() => handleClick(item.url)} className="tabItem">
            {item.name}
          </div>
        ))}
        <img src={gitUrl} className="gitImg" alt="git" />
      </div>
    </div>
  );
};

export default Header;
