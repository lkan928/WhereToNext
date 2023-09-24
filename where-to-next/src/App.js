import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import scrapeWebsite from './scraper.js';

function App() {
  const [pageData, setPageData] = useState({ pageTitle: "", headingText: "" });

  useEffect(() => {
    scrapeWebsite("https://www.temple.edu/")
      .then((data) => {
        setPageData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page Title: {pageData.pageTitle}
        </p>
        <p>
          Heading Text: {pageData.headingText}
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
