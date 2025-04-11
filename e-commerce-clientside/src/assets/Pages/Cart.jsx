import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/Context";

const Cart = () => {
  const {
    PRODUCT_BASE_URL,
    TotalAmount,
    setTotalAmount,
    cartItems,
    setCartItems,
    allProducts,
  } = useContext(myContext);
  const cartItemsData = localStorage.getItem("cartList");
  const [showAddress, setShowAddress] = useState(false);
  console.log(JSON.parse(cartItemsData));

  useEffect(() => {
    if (cartItemsData && JSON.parse(cartItemsData).length > 0) {
      let totalPrice = 0;
      JSON.parse(cartItemsData).forEach((item) => {
        totalPrice += parseInt(item.price.replace(/[^0-9]/g, ""));
      });
      setTotalAmount(totalPrice);
    }
  }, [cartItems]);
  let addToCart = (data) => {
    let originalPrice = allProducts.find((item) => item.id === data.id);
    let exist = cartItems.find((product) => product.id == data.id);
    if (exist) {
      let price = parseInt(exist.price.replace(/[^0-9]/g, ""));
      let updatePrice =
        price + parseInt(originalPrice.price.replace(/[^0-9]/g, ""));
      let updatedCart = cartItems.map((item) =>
        item.id === exist.id ? { ...item, price: updatePrice.toString() } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems((prev) => [...prev, data]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row py-6 max-w-6xl w-full px-6 mx-auto bg-white my-6">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart <span className="text-sm text-indigo-500">3 Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>
        {cartItemsData &&
          JSON.parse(cartItemsData).map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3 "
            >
              <div className="flex items-center md:gap-6 gap-3">
                <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                  <img
                    className="max-w-full h-full object-cover"
                    src={`${PRODUCT_BASE_URL}${product.img}`}
                    alt={product.name}
                  />
                </div>
                <div>
                  <p className=" font-semibold">
                    {product.name}
                  </p>
                  <div className="font-normal text-gray-500/70">
                    <p>
                      {product.fit && (
                        <p className=" text-gray-500">{product.fit}</p>
                      )}
                      {product.brand && (
                        <p className="">
                          <strong>Brand: </strong> {product.brand}
                        </p>
                      )}
                      {product.color && (
                        <p className="">
                          <strong>Color:</strong>
                          {product.color}
                        </p>
                      )}
                      {product.type && (
                        <p className="">
                          <strong>Type: </strong>
                          {product.type}
                        </p>
                      )}
                      {product.os && (
                        <p className="">
                          <strong>OS: </strong>
                          {product.os}
                        </p>
                      )}
                      {product.display && (
                        <p className="">
                          <strong>Display Type: </strong>
                          {product.display}{" "}
                        </p>
                      )}
                      {product.camera && (
                        <p className="">
                          <strong>Cameras: </strong>
                          {product.camera}
                        </p>
                      )}
                      {product.meterial && (
                        <p className="">{product.meterial}</p>
                      )}
                      {product.size && <p className="">{product.size}</p>}
                      Size: <span>{product.fit}</span>
                    </p>
                    <div className="flex items-center">
                      <p>Qty:</p>
                      <select className="outline-none">
                        {Array(5)
                          .fill("")
                          .map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">${product.price}</p>
              <button className="cursor-pointer mx-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                    stroke="#FF532E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}

        <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
          Continue Shopping
        </button>
      </div>

      <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
        <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
        <hr className="border-gray-300 my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">No address found</p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-indigo-500 hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                <p
                  onClick={() => setShowAddress(false)}
                  className="text-gray-500 p-2 hover:bg-gray-100"
                >
                  New York, USA
                </p>
                <p
                  onClick={() => setShowAddress(false)}
                  className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

          <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-300" />

        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>{TotalAmount}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>{Math.floor(TotalAmount * 0.2)}</span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Total Amount:</span>
            <span>${TotalAmount + Math.floor(TotalAmount * 0.2)}</span>
          </p>
        </div>

        <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
