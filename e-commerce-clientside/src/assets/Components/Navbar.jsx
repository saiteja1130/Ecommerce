import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../Context/Context";

const Navbar = () => {
  const { setUserDetails, userLocalData, setUserLocalData, cartLength } =
    useContext(myContext);
  const [state, setState] = useState(false);

  const categories = [
    { id: 1, name: "Home" },
    { id: 2, name: "Mens" },
    { id: 3, name: "Womens" },
    { id: 4, name: "Kids" },
    { id: 5, name: "Electronics" },
    { id: 6, name: "Home Appliances" },
    { id: 7, name: "More" },
  ];
  useEffect(() => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");

    if (email && name) {
      setUserLocalData({ email, name });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    setUserDetails([]);
    setUserLocalData({});
  };

  return (
    <div className="bg-white border-b-1 border-primary shadow-sm z-10">
      <header>
        <nav className="flex items-center  justify-between px-3 sm:px-5 lg:px-6 py-2 md:gap-3">
          <div className="text-lg sm:text-xl md:text-2xl xl:text-3xl  text-primary font-black cursor-pointer">
            <h1>CartBazaar</h1>
          </div>
          <ul className="lg:basis-[50%] justify-between items-center gap-1 xl:gap-3 xl:py-1 lg:px-2  hidden lg:flex">
            {categories.map((navItem, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer text-base  px-1.5 py-0.5 w-max text-third hover:text-white  transition-all duration-500 hover:rounded-sm hover:bg-primary hover:rounded-b-[0px] hover:scale-105 "
                >
                  {navItem.name}
                </li>
              );
            })}
          </ul>
          <div className="basis-[50%] lg:basis-[25%] hidden sm:flex items-center text-sm gap-2 border border-primary bg-green-100 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-xl relative">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping cursor-pointer text-primary"></i>
              <span className="absolute top-[0%] left-[10%] bg-secoundary h-4 w-4 rounded-full text-white text-center text-xs">
                {cartLength}
              </span>
            </Link>
            {userLocalData.email ? (
              <div className="relative flex items-center gap-2 cursor-pointer">
                <i
                  className="fa-regular fa-user text-xl"
                  onClick={() => setState(!state)}
                ></i>
                {state ? (
                  <div className="absolute top-full mt-2 right-[-50%] flex flex-col bg-white shadow-lg rounded-md p-3 min-w-[200px] z-50">
                    <p className="text-gray-700 font-medium">
                      {userLocalData.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {userLocalData.email}
                    </p>
                    <hr className="my-2" />
                    <button
                      className="text-left text-red-600 hover:text-red-800"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white lg:px-3 lg:py-1 xl:px-4 xl:py-2 px-2 text-base flex items-center gap-2 py-1 rounded-full hover:bg-primary-dull"
              >
                <i className="fa-regular fa-user cursor-pointer "></i>Login
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
