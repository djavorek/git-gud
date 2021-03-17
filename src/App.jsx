import React from 'react';

import './App.css';

import GitFlowGph from './components/Graph/graphs/GitFlowGph';

function App() {
  return (
    <div className="App">
      <div className="Start">
        <span>git-gud</span>
      </div>
      <GitFlowGph />
    </div>
  );
}

export default App;
