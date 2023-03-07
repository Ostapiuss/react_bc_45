import React from 'react';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import MainRoutes from './MainRoutes';

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main>
          <MainRoutes />
        </Main>
      </div>
    );
  }
}

export default App;
