import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/Context";

const Carosel = () => {
  const { banners, PRODUCT_BASE_URL } = useContext(myContext);
  const [indexValue, setIndexValue] = useState(0);
  const prev = () => {
    setIndexValue((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };
  const next = () => {
    setIndexValue((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2500); 
  
    return () => clearInterval(timer); 
  }, [indexValue]);
  return (
    <div className="relative -z-10">
      <div className="flex w-max">
        {banners.map((img, index) => {
          return (
            <div
              key={index}
              style={{ transform: `translateX(-${indexValue * 100}vw)` }}
              className="transition-transform duration-1000 scroll-smooth"
            >
              <img
                src={`${PRODUCT_BASE_URL}${img}`}
                alt=""
                className="w-[100vw] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[480px]"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex justify-between px-1 lg:px-4">
        <button
          onClick={prev}
          className="text-white text-base lg:text-2xl font-black cursor-pointer hover:text-gray-500 w-max px-2 py-2"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          onClick={next}
          className="text-white text-base lg:text-2xl font-black cursor-pointer hover:text-gray-500 w-max px-2 py-2"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carosel;
