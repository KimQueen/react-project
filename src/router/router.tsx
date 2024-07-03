import React from 'react';
import Button from '../pages/ComponentShow/Button';
import Home from '../pages/Home';

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/component',
    element: <Button />,
    children: [
      {
        path: 'button',
        element: <Button />,
      },
    ],
  },
];
export default routes;
