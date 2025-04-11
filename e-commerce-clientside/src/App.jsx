import React from "react";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDisplay from "./assets/Pages/productDisaply";
import Orders from "./assets/Pages/Orders";
import Cart from "./assets/Pages/Cart";
import UserPage from "./assets/Pages/UserPage";
import Checkout from "./assets/Pages/Checkout";
import MobileDevices from "./assets/Pages/MobileDevices";
import ProductDetails from "./assets/Pages/ProductDetails";
import Login from "./assets/Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div className="App lg:px-12 px-2 sm:px-4">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-display" element={<ProductDisplay />} />
        <Route path="/products-display/:id" element={<ProductDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
