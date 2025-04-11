import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../Context/Context";
import ProductCard from "../Components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { cartItems, allProducts, setCartItems, PRODUCT_BASE_URL } =
    useContext(myContext);
  useEffect(() => {
    scrollTo(0, 0);
  });
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
    <div>
      <div className="flex items-center  bg-white mt-8 ">
        {allProducts
          .filter((product) => product.id == parseInt(id))
          .map((product, index) => {
            return (
              <div className="max-w-6xl w-full px-4 py-2" key={index}>
                <div className="flex flex-col md:flex-row gap-5 mt-4">
                  <div className="border border-gray-500/30 sm:mx-auto max-w-100 rounded overflow-hidden">
                    <img
                      src={`${PRODUCT_BASE_URL}${product.img}`}
                      alt="Selected product"
                    />
                  </div>
                  <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-xl font-medium sm:text-2xl">
                      {product.name}
                    </h1>
                    <p className="text-gray-500/70  text-sm sm:text-base mt-1 sm:my-1">
                      MRP:
                      <span className="line-through text-secoundary">
                        ${parseInt(product.price.replace(/[^0-9]/g, "")) * 1.5}
                      </span>
                    </p>
                    <p className="text-lg sm:text-xl font-medium text-primary">
                      <span className="text-black">OfferPrice:</span>{" "}
                      {product.price}
                    </p>
                    <span className="text-third">(inclusive of all taxes)</span>

                    <p className="hidden md:block font-semibold">
                      {product.name}
                    </p>
                    <p>
                      {product.fit && (
                        <p className="sm:text-base text-black">{product.fit}</p>
                      )}
                      {product.brand && (
                        <p className="sm:text-base">
                          <strong>Brand: </strong> {product.brand}
                        </p>
                      )}
                      {product.color && (
                        <p className="sm:text-base">
                          <strong>Color:</strong>
                          {product.color}
                        </p>
                      )}
                      {product.type && (
                        <p className="sm:text-base">
                          <strong>Type: </strong>
                          {product.type}
                        </p>
                      )}
                      {product.os && (
                        <p className="sm:text-base">
                          <strong>OS: </strong>
                          {product.os}
                        </p>
                      )}
                      {product.display && (
                        <p className="sm:text-base">
                          <strong>Display Type: </strong>
                          {product.display}{" "}
                        </p>
                      )}
                      {product.camera && (
                        <p className="sm:text-base">
                          <strong>Cameras: </strong>
                          {product.camera}
                        </p>
                      )}
                      {product.meterial && (
                        <p className="sm:text-base">{product.meterial}</p>
                      )}
                      {product.size && <p className="">{product.size}</p>}
                      Size: <span>{product.fit}</span>
                    </p>
                    <p className="text-base sm:text-lg font-medium mt-2">
                      About Product
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {product.description}
                    </p>
                    <div className="flex items-center mt-6 gap-4 text-base">
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 rounded-md transition"
                      >
                        Add to Cart
                      </button>
                      <button onClick={() => addToCart(product)} className="w-full py-3.5 cursor-pointer font-medium bg-third text-white hover:bg-primary-dull rounded-md transition">
                        Buy now 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductDetails;
