
import "./App.css";
import React, { useState } from 'react';


function App() {
  // React state to keep track of the active slide
  const [activeSlide, setActiveSlide] = useState(null);

  // Function to handle slide click
  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="container">
    
      <div className="slides">
        <div
          className={`slide ${activeSlide === 0 ? 'active' : ''}`}
          onClick={() => handleSlideClick(0)}
        >
          <a href="#">Code notes</a>
          <div className="content">
           no
          </div>
        </div>

        <div
          className={`slide ${activeSlide === 1 ? 'active' : ''}`}
          onClick={() => handleSlideClick(1)}
        >
          <a href="#">section notes</a>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi rem ab voluptate provident voluptatum veniam cupiditate beatae expedita veritatis aliquid officia doloribus dolore maiores doloremque mollitia! A ducimus autem ut!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum eius voluptas dicta. Vero tempore rerum itaque? Quidem nobis vel consectetur sit amet illo dicta veniam ab ut libero officia!
          </div>
        </div>

        <div
          className={`slide ${activeSlide === 2 ? 'active' : ''}`}
          onClick={() => handleSlideClick(2)}
        >
          <a href="#">chapter notes</a>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi rem ab voluptate provident voluptatum veniam cupiditate beatae expedita veritatis aliquid officia doloribus dolore maiores doloremque mollitia! A ducimus autem ut!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat officiis repellat reprehenderit incidunt deserunt illum eum ipsa quod nihil eligendi hic delectus quaerat. Ad sint tempore cumque mollitia reiciendis!
          </div>
        </div> <div
          className={`slide ${activeSlide === 3 ? 'active' : ''}`}
          onClick={() => handleSlideClick(2)}
        >
          <a href="#">chapter Guidelines</a>
          <div className="content">
      No guidelines avilable.
          </div>
              </div>
      </div>
    </div>
  );
}

export default App;
