import React from "react";

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';
import Sidebar from "./Sidebar";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <main>
          <p>Текст</p>
        </main>
      </div>
    )
  }
}

export default App;
