import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import About1 from '../pages/About1';
import Test from '../pages/Test';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/About1',
    element: <About1 />,
  },
];
export default routes;
