import React, { useContext } from "react";
import { myContext } from "../Context/Context";
import Showmore from "./Showmore";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const {
    womenAllData,
    menAllData,
    PRODUCT_BASE_URL,
    kidsAllData,
    homeAllData,
  } = useContext(myContext);

  const renderSection = (title, dataArray) => (
    <div className="bg-white p-3 rounded-md shadow shadow-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 snap-x snap-mandatory">
        {dataArray.slice(0, 9).map((data, index) => (
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
        ))}
        <Link
          to="/products-display"
          className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] h-full bg-pink-400 flex items-center justify-center rounded-md flex-shrink-0 snap-start"
        >
          <Showmore />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-5 py-4  sm:gap-6 md:gap-8 lg:gap-9">
      {renderSection("Men's Collection", menAllData)}
      {renderSection("Women's Collection", womenAllData)}
      {renderSection("Kids' Collection", kidsAllData)}
      {renderSection("Home Essentials", homeAllData)}
    </div>
  );
};

export default ProductCard;
