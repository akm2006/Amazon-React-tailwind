import React, { useRef } from "react";

const Carousel = () => {
  const carousel1 = Object.values(
    import.meta.glob("/src/assets/images/carousel1/*.jpg", { eager: true })
  ).map((img) => img.default || img);
  const carousel2 = Object.values(
    import.meta.glob("/src/assets/images/carousel2/*.jpg", { eager: true })
  ).map((img) => img.default || img);

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 500; 
      ref.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };
 
  return (
    <>
      <div className="h-65 w-full bg-white p-5 my-6 relative ">
        <h1>Popular items this season</h1>
        <div className="overflow-scroll scroll-smooth h-[90%]" ref={carousel1Ref} >
        <div
          className="flex justify-between h-[95%]  " 
          
        >
          {carousel1.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`prod${index + 1}`}
              className="h-full w-60 object-contain p-2"
            />
          ))}
        </div></div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8" onClick={() => scroll(carousel1Ref, "left")}
         
        >
          <i className="bi bi-chevron-left text-black !text-3xl "></i>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8" onClick={() => scroll(carousel1Ref, "right")}
        >
          <i className="bi bi-chevron-right text-black !text-3xl "></i>
        </button>
      </div>

      <div className="h-65 w-full bg-white p-5 my-6 relative ">
        <h1>Best Sellers in Home & Kitchen</h1>
        <div className="overflow-scroll h-[90%]" ref={carousel2Ref}>
        <div
          className="flex justify-between h-[95%] " 
          
        >
          {carousel2.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`prod${index + 1}`}
              className="h-full w-60 object-contain p-2"
            />
          ))}
        </div></div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8" onClick={() => scroll(carousel2Ref, "left")}
         
        >
          <i className="bi bi-chevron-left text-black !text-3xl "></i>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8" onClick={() => scroll(carousel2Ref, "right")}
        >
          <i className="bi bi-chevron-right text-black !text-3xl "></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
