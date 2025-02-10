import React, { useState,useEffect } from "react";
import Herocontent from "./Herocontent";

const Hero = () => {
  const slides = Object.values(
    import.meta.glob("/src/assets/images/hero/*.jpg", { eager: true })
  ).map((img) => img.default || img);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };
  return (
    <div className="px-5 bg-[#d6dada]  w-screen">
    <div>
    <div id="slider" className="w-full relative overflow-hidden  ">
      <div
        className="w-full flex transition-transform ease-in-out duration-300 h-[90vh] "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            id="sliderImg"
          />
        ))}
      </div>
      <button
        id="prev"
        className="absolute left-0 top-0 cursor-pointer h-[50%]"
        onClick={prevSlide}
      >
        <i className="bi bi-chevron-left !text-5xl "></i>
      </button>
      <button
        id="next"
        className=" absolute right-0 top-0 h-[50%] cursor-pointer"
        onClick={nextSlide}
      >
        <i className="bi bi-chevron-right !text-5xl"></i>
      </button>
    
    </div>
 <Herocontent/>
 </div></div>
  );
};

export default Hero;
