import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line
import RoutesToManage from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <RoutesToManage />
  </BrowserRouter>
);

export default App;
