import React, { useRef,useState, useEffect } from 'react';
import './App.css';
import scrapeWebsite from './scraper.js';
import Colors from './colors.js'


function App() {
  const [pageData, setPageData] = useState({ pageTitle: "", headingText: "" });
  
  const canvasRef = useRef();

  const drawRectangle = () => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = Colors.EGGSHELL;
    context.lineWidth = 2;
    context.strokeRect(50, 20, 195, 75);
    
  };
  const drawBackground = () => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = Colors.AUBURN;
    context.lineWidth = 2;
    context.fillStyle = Colors.AUBURN;
    context.fillRect(0, 0, 300, 250);
  };
  const drawFRectangle = () => {
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = Colors.AMARANTH;
    context.lineWidth = 2;
    context.fillStyle = Colors.VIOLET;
    context.fillRect(120, 100, 50, 25);
  };
  const drawText = () => {
    const context = canvasRef.current.getContext("2d");
    context.font = "8px arial";
    context.strokeStyle = Colors.FLORAL;
    context.strokeText("Go!", 138, 115);
  };
  const createButton = () => {
    
  };

  useEffect(() => {
    drawBackground();
    drawRectangle();
    drawFRectangle();
    drawText();
  }, []);
  

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
      <canvas
    ref={canvasRef}
    style={{
      width: "1500px",
      height: "800px",
      background: "url('./bg-img.jpg')",
    }}
    
    
    />
   
      
      <header className="App-header">

      <a class="btn btn-large btn-info" href="https://www.howtocanvas.com/">Home</a>

        <p>
          Page Title: {pageData.pageTitle}
        </p>
        <p>
          Heading Text: {pageData.headingText}
        </p>
      </header>
    </div>
  );
}


export default App;
