import React, { useState } from 'react';
import * as antd from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import './index.scss';

const scope = { ...antd };

const Editor = (props: any) => {
  const [showCode, setShowCode] = useState(false);
  const { code, name } = props;

  const handleClick = () => {
    setShowCode(!showCode);
  };
  return (
    <div className="live-card">
      <div className="editorName">{name}</div>

      <LiveProvider code={code} scope={scope} noInline>
        <div className="preview">
          <LivePreview />
        </div>
        {showCode && <LiveEditor />}
        <div className="showOperateLine" onClick={() => handleClick()}>
          {!showCode ? <DownOutlined /> : <UpOutlined />}
          <span className="textShow">展示代码</span>
        </div>
      </LiveProvider>
    </div>
  );
};

export default Editor;
