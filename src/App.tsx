import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/router';
import './App.css';

const App = () => {
  const routesShow = useRoutes(routes);

  return <div>{routesShow}</div>;
};
export default App;
