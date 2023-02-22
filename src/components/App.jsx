import React from 'react';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Card } from 'components/Card';

import universityData from 'constants/universityData.json';

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <Main>
          <Card universityName={universityData.name} />
        </Main>
      </div>
    );
  }
}

export default App;
