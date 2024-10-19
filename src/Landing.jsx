import React, { useState, useEffect } from "react";
import './App.css'; // Import your CSS
import duckyImage from './ducky.png'; // Ensure this path is correct

const NUM_IMAGES = 25; // Number of images to animate

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the timer ends
      console.log("Loading complete."); // Log when loading is complete
    }, 6500); // 5 seconds loading time to ensure all ducks exit the screen
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log("Scrolling to landing page."); // Log before scrolling
      window.scrollTo({
        top: document.getElementById('landing-page').offsetTop,
        behavior: 'smooth',
      });
    }
  }, [loading]);

  const images = Array.from({ length: NUM_IMAGES }, (_, index) => index);

  return (
    <div>
      {loading && (
        <div className="loading-screen">
          <div className="animation-container">
            {images.map((_, index) => {
              console.log(`Creating duck ${index}`); // Log each duck creation
              return (
                <img
                  key={index}
                  src={duckyImage} // Use the imported ducky image
                  alt={`Ducky ${index + 1}`}
                  className="animated-image"
                  style={{ 
                    left: `${Math.floor(Math.random() * 100) - 52}vw`,
                    animationDelay: `${index * 0.125}s`
                  }} // Adjust the delay and left position
                />
              );
            })}
          </div>
        </div>
      )}
      {!loading && (
        <div id="landing-page" className="landing-page">
          <div className="Header">
            <img id="Logo" src={duckyImage} alt="Logo" />
            <p id="Title">Tech Ducks</p>
            <div className="Menu">
              <a id="WorkButton" href="Work">Work</a>
              <a id="ContactButton" href="Contact">Contact</a>
            </div>
          </div>
          <div className="first">
            <p id="Phrase">We develop, we design,<br />we don't duck around</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
