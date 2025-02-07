import React, { useState } from "react";

const Slider = () => {
  const slides = [
    "/Amazon-React-tailwind/images/hero/hero1.jpg",
    "/Amazon-React-tailwind/images/hero/hero2.jpg",
    "/Amazon-React-tailwind/images/hero/hero3.jpg",
    "/Amazon-React-tailwind/images/hero/hero4.jpg",
    "/Amazon-React-tailwind/images/hero/hero5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div id="slider" className="">
      <div className="w-full h-[100vh] flex relative">
        <img
          id="sliderImg"
          className="w-full h-[80%]"
          src={slides[currentIndex]}
          alt=""
        />
        <button
          id="prev"
          className="absolute left-0 top-0 py-[15vh] cursor-pointer"
          onClick={nextSlide}
        >
          <i className="bi bi-chevron-left !text-5xl "></i>
        </button>
        <button
          id="next"
          className=" absolute right-0 top-0 py-[15vh] cursor-pointer"
          onClick={prevSlide}
        >
          <i className="bi bi-chevron-right !text-5xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
