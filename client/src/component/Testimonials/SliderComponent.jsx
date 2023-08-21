import React, { useState, useEffect } from 'react';
import './slider.css'
const SliderComponent = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  useEffect(() => {
    setActiveSlideIndex(currentIndex);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imageUrls,currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
       <React.Fragment>
       <div className="slider-container">
            <button onClick={prevSlide} className="slider-button prev-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
        <path d="M7.06298 1.70128L1.05225 8.7138L7.06298 15.7263" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.05247 8.71374L41.124 8.71375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            </button>
            <div className="slider-content">
              <img src={imageUrls[currentIndex].imageUrl} alt={`Slide ${currentIndex + 1}`} />
              <p className="slider-description">{imageUrls[currentIndex].desctiption}</p>
            </div>
            <button onClick={nextSlide} className="slider-button next-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="17" viewBox="0 0 43 17" fill="none">
        <path d="M35.9263 1.12874L41.937 8.14127L35.9263 15.1538" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.9374 8.14124L1.86572 8.14124" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
            </button>
          </div>
          <div className="indicator-dots">
      {imageUrls.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === activeSlideIndex ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
          </React.Fragment>
  );
};

export default SliderComponent;
