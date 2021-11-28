import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import RoutesToManage from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RoutesToManage />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

// Aula - Estilizando Dashboard
