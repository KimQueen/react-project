import React from 'react';
import Layout from 'src/BusinessComponent/Layout';
import Editor from 'src/BusinessComponent/Editor';
import './index.scss';

const jsxExample1 = `
const ButtonShow = () => {
  return (
    <div >
        <Button type="primary">999</Button>
    </div>
  );
};
render(<ButtonShow></ButtonShow>)
`;

const jsxExample = `
const ButtonShow = () => {
  return (
    <div >
        <Button type="primary" size="small">999</Button>
    </div>
  );
};
render(<ButtonShow></ButtonShow>)
`;

const ButtonShow = () => (
  <div className="">
    <Layout title="Button 按钮">
      <div className="space_wrapper">
        <Editor code={jsxExample1} name="组件类型" />
        <Editor code={jsxExample} name="组件尺寸" />
      </div>
    </Layout>
  </div>
);

export default ButtonShow;
