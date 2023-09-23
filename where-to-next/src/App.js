import React from 'react';
import './App.css';
import map from './map.js'; // Adjust the path to map.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {map.initMap()}
      </header>
    </div>
  );
}

export default App;
