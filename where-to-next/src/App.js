import React from 'react';
import './App.css';
import map from './map.js'; // Adjust the path to map.js
import scrapeWebsite from './scraper.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {map.initMap()}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          scrapeWebsite("https://en.wikipedia.org/wiki/United_States")
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
