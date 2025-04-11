import React, { useContext } from "react";
import { myContext } from "../Context/Context";

const ShopOptions = () => {
  return (
    <div className="bg-white  p-2 mt-4 flex flex-col md:flex-row justify-center items-center gap-5">
      <div class="w-full flex items-center justify-center space-x-2 max-w-md py-2.5 rounded-lg font-medium text-xs md:tex-sm text-white text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p>
          Get 20% OFF on Your First Ticket!{" "}
          <span class="underline">Get your ticket</span>
        </p>
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="w-full flex items-center justify-center space-x-2 max-w-md py-2.5 rounded-lg font-medium text-xs md:tex-sm text-white text-center bg-gray-800">
        <p>
          Get 20% OFF on Your First Ticket!{" "}
          <span class="underline">Get your ticket</span>
        </p>
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ShopOptions;
