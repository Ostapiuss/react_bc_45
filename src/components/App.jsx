import React from 'react';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Card } from 'components/Card';
import {UniversityPage} from 'pages/UniversityPage';

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main>
        <UniversityPage/>
        </Main>
      </div>
    );
  }
}

export default App;
