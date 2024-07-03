import React from 'react';
import { Badge } from 'antd';
import { descConfig } from './config';
import './index.scss';

const HomePage = () => {
  const handleRouterGo = (key: string) => {
    console.log(key);
  };
  return (
    <div className="homePageWrapper">
      <div className="title">应用组件库</div>
      <div className="desc-content">
        {descConfig.map((item) => (
          <Badge.Ribbon text="HOT" color="red" style={item.key !== 'start' ? { display: 'none' } : {}}>
            <div className="desc-item" key={item.key} onClick={() => handleRouterGo(item.key)}>
              <div className="desc-title">{item.title}</div>
              <div className="content">{item.desc}</div>
            </div>
          </Badge.Ribbon>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
