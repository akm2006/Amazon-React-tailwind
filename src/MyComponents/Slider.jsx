import React, { useState,useEffect } from "react";

const Slider = () => {
  const slides = [
    "/Amazon-React-tailwind/images/hero/hero1.jpg",
    "/Amazon-React-tailwind/images/hero/hero2.jpg",
    "/Amazon-React-tailwind/images/hero/hero3.jpg",
    "/Amazon-React-tailwind/images/hero/hero4.jpg",
    "/Amazon-React-tailwind/images/hero/hero5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <div id="slider" className="w-full relative overflow-hidden ">
      <div
        className="w-full flex transition-transform ease-in-out duration-300 "
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
  );
};

export default Slider;
