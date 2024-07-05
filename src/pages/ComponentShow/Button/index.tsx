import React, { useState } from 'react';
import Layout from 'src/BusinessComponent/Layout';
import Editor from 'src/BusinessComponent/Editor';
import './index.scss';

const jsxExample1 = `

const ButtonShow = () => {
  return (
    <div >
        <Button >999</Button>
    </div>
  );
};
render(<ButtonShow></ButtonShow>)
`;
const ButtonShow = () => {
  const [state, setState] = useState(0);
  return (
    <div className="">
      <Layout title="Button">
        <Editor code={jsxExample1} />
      </Layout>
    </div>
  );
};

export default ButtonShow;
