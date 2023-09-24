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
  

  useEffect(() => {
    drawBackground();
    drawRectangle();
    drawFRectangle();
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
    <script>
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
              //window.devicePixelRatio=1; //Blury Text
        window.devicePixelRatio=2;      //Clear Text
        //(CSS pixels).
              //Display Size
        var size = 150;
        canvas.style.width = size + "px";
        canvas.style.height = size + "px";
  
        var scale = window.devicePixelRatio; 
            
        canvas.width = Math.floor(size * scale);
        canvas.height = Math.floor(size * scale);
  
        //CSS pixels for coordinate systems
        ctx.scale(scale, scale);
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
  
        var x = size / 2;
        var y = size / 2;
  
        var textString = "GEEKS FOR GEEKS";
        ctx.fillText(textString, x, y);
    </script>
   
      
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
