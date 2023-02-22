import React from 'react';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Paper } from './Paper';

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <Main>
          <Paper>Paper</Paper>
        </Main>
      </div>
    );
  }
}

export default App;
