import React from 'react'

const Carousel = () => {
    const carousel1 = Object.values(
        import.meta.glob("/src/assets/images/carousel1/*.jpg", { eager: true })
      ).map((img) => img.default || img);
      const carousel2 = Object.values(
        import.meta.glob("/src/assets/images/carousel2/*.jpg", { eager: true })
      ).map((img) => img.default || img);

  return (
     <>
      <div className='h-65 w-full bg-white p-5 my-6 relative  '>
        <h1>Popular items this season</h1>
        <div className=' h-[90%] min-w-2 flex justify-between overflow-scroll'>
        {carousel1.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`prod${index + 1}`}
            className="h-full w-60 object-contain p-2"
          />
          
        ))}
  
        </div>
        <button
        id="prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8"
      >
        <i className="bi bi-chevron-left text-black !text-3xl "></i>
      </button>
      <button
        id="prev"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8"
      >
        <i className="bi bi-chevron-right text-black !text-3xl "></i>
      </button>
      </div>


      <div className='h-65 w-full bg-white p-5 my-6 relative  '>
        <h1>Best Sellers in Home & Kitchen</h1>
        <div className=' h-[90%] min-w-2 flex justify-between overflow-scroll'>
        {carousel2.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`prod${index + 1}`}
            className="h-full w-60 object-contain p-2"
          />
          
        ))}
  
        </div>
        <button
        id="prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8"
      >
        <i className="bi bi-chevron-left text-black !text-3xl "></i>
      </button>
      <button
        id="prev"
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 py-8"
      >
        <i className="bi bi-chevron-right text-black !text-3xl "></i>
      </button>
      </div>
      </>
    
  )
}

export default Carousel
