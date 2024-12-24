import React, { useState } from 'react';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      img: 'https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04165947/EC_Retail_ECommerce_750.jpg',
      caption: '"Fashion Mart: Where Trends Meet Your Wardrobe!"',
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/736x/4a/62/1b/4a621bcbaec73390418fa718013eee6d.jpg',
      caption: '"Step Into Style, Only at Fashion Mart."',
    },
    {
      id: 3,
      img: 'https://www.claseejecutiva.com.co/wp-content/uploads/2024/08/e-commerce-ecommerce-comercio-electronico-1024x529.jpg',
      caption: '"Elevate Your Style with Fashion Mart."',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative pt-16 overflow-hidden ">
      {/* Render the current slide */}
      <div className="flex justify-center items-center border w-full">
        <img
          src={slides[index].img}
          alt={`Slide ${index + 1}`}
          className="w-full h-96  rounded shadow-lg"
        />
      </div>

      {/* Caption */}
      <p className="text-center text-white mt-[-30px] text-lg font-medium">
        {slides[index].caption}
      </p>


      {/* Navigation Buttons */}
      <button
        className="prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white font-bold p-2 rounded-r"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white font-bold p-2 rounded-l"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Slideshow;














// import React from 'react'

// const Banner = () => {
//   return (
//     <>
//       <div className=''>
//         <img className='w-full h-96 blur-[1px]' src="https://i.pinimg.com/736x/4a/62/1b/4a621bcbaec73390418fa718013eee6d.jpg" alt="" />
//       </div>
//     </>
//   )
// }

// export default Banner