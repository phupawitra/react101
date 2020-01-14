import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleClick from './ToggleClick';
import SimpleApi from './SimpleApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleClick />
        <SimpleApi />
      </header>
    </div>
  );
}

export default App;
