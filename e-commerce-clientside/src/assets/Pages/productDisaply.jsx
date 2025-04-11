import React, { useContext, useState } from "react";
import { myContext } from "../Context/Context";
import { Link } from "react-router-dom";

const productDisaply = () => {
  const { allProducts, PRODUCT_BASE_URL } = useContext(myContext);
  console.log(allProducts);

  return (
    <div className="bg-white mt-8 p-3 md:p-6 border-1">
      <div>
        <h1 className="text-black pl-3 md:pl-6 text-2xl font-semibold">
          ALL PRODUCUTS
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-8 gap-3  p-2 md:p-6">
        {allProducts.map((data, index) => {
          return (
            <Link
              to={`/products-display/${data.id}`}
              key={index}
              className="max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] bg-white rounded-sm border border-gray-200 px-2 py-1 flex-shrink-0 snap-start duration-500 transition-all"
            >
              <div className="group cursor-pointer flex items-center justify-center">
                <img
                  className="group-hover:scale-105 transition"
                  src={`${PRODUCT_BASE_URL}${data.img}`}
                  alt={data.name}
                />
              </div>
              <div className="text-gray-500/60 text-sm">
                <p>{data.category}</p>
                <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-1.5 truncate w-full">
                  {data.name}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium truncate w-full">
                  {data.brand}
                </p>
                <div className="flex items-end justify-between mt-1">
                  <p className="md:text-xl text-sm sm:text-base lg:text-lg font-medium text-indigo-500">
                    ${data.price}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default productDisaply;
