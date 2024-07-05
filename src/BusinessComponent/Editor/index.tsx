import React from 'react';
import * as antd from 'antd';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import './index.scss';

const scope = { ...antd };

const Editor = (props: any) => {
  const { code } = props;
  return (
    <div className="live-card">
      <LiveProvider code={code} scope={scope} noInline>
        <div className="preview">
          <LivePreview />
        </div>
        <LiveEditor className="font-mono" />
      </LiveProvider>
    </div>
  );
};

export default Editor;
