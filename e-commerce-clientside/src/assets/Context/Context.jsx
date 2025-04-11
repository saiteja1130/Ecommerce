import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const URL = "https://ecommerce-serverside-vn1z.onrender.com/";
  const PRODUCT_BASE_URL = "https://ecommerce-serverside-vn1z.onrender.com/product-list/";

  // Initial state
  const [userLocalData, setUserLocalData] = useState({});
  const [banners, setBanners] = useState([]);
  const [shoppingOptions, setShoppingOptions] = useState([]);
  const [latestMobiles, setLatestMobiles] = useState([]);
  const [latestLaptops, setLatestLaptops] = useState([]);
  const [latestCameras, setLatestCameras] = useState([]);
  const [latestHeadphones, setLatestHeadphones] = useState([]);
  const [microwaves, setMicrowaves] = useState([]);
  const [refrigerators, setRefrigerators] = useState([]);
  const [washingMachines, setWashingMachines] = useState([]);
  const [vacuumCleaners, setVacuumCleaners] = useState([]);

  const [kidsTopWear, setKidsTopWear] = useState([]);
  const [kidsBottomWear, setKidsBottomWear] = useState([]);
  const [kidsShoes, setKidsShoes] = useState([]);
  const [kidsToys, setKidsToys] = useState([]);

  const [mensShirts, setMensShirts] = useState([]);
  const [mensPants, setMensPants] = useState([]);
  const [mensShoes, setMensShoes] = useState([]);
  const [mensAccessories, setMensAccessories] = useState([]);

  const [womensTops, setWomensTops] = useState([]);
  const [womensTrousers, setWomensTrousers] = useState([]);
  const [womensShoes, setWomensShoes] = useState([]);
  const [womensHandbags, setWomensHandbags] = useState([]);
  const [womensJewelry, setWomensJewelry] = useState([]);

  const [userDetails, setUserDetails] = useState([]);
  const [fetchProductData, setFecthProductData] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartList");
    return saved ? JSON.parse(saved) : [];
  });
  const [cartLength, setCartLength] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  useEffect(() => {
    const updatedCart = localStorage.getItem("cartList");
    try {
      const parsed = JSON.parse(updatedCart);
      if (parsed) {
        setCartLength(parsed.length);
      }
    } catch (e) {
      console.error("Error parsing cartList from localStorage:", e);
    }
  }, [cartItems]);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${PRODUCT_BASE_URL}`);
        const data = res.data;
        setBanners(data.banners);
        setShoppingOptions(data.shoppingOptions);
        setLatestMobiles(data.latestMobiles);
        setLatestLaptops(data.latestLaptops);
        setLatestCameras(data.latestCameras);
        setLatestHeadphones(data.latestHeadphones);
        setRefrigerators(data.refrigerators);
        setMicrowaves(data.microwaves);
        setWashingMachines(data.washingMachines);
        setVacuumCleaners(data.vacuumCleaners);
        setKidsTopWear(data.kidsTopWear);
        setKidsBottomWear(data.kidsBottomWear);
        setKidsShoes(data.kidsShoes);
        setKidsToys(data.kidsToys);
        setMensShirts(data.mensShirts);
        setMensPants(data.mensPants);
        setMensShoes(data.mensShoes);
        setMensAccessories(data.mensAccessories);
        setWomensTops(data.womensTops);
        setWomensTrousers(data.womensTrousers);
        setWomensShoes(data.womensShoes);
        setWomensHandbags(data.womensHandbags);
        setWomensJewelry(data.womensJewelry);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchBanners();
  }, []);
  const mobiles = useMemo(() => latestMobiles, [latestMobiles]);
  const laptops = useMemo(() => latestLaptops, [latestLaptops]);
  const headphones = useMemo(() => latestHeadphones, [latestHeadphones]);
  const cameras = useMemo(() => latestCameras, [latestCameras]);
  const allElectronics = useMemo(
    () => [...mobiles, ...laptops, ...headphones, ...cameras],
    [mobiles, laptops, headphones, cameras]
  );
  const menAllData = useMemo(
    () => [...mensShirts, ...mensPants, ...mensShoes, ...mensAccessories],
    [mensShirts, mensPants, mensShoes, mensAccessories]
  );
  const womenAllData = useMemo(
    () => [
      ...womensTops,
      // ...womensTrousers,
      ...womensShoes,
      ...womensHandbags,
      ...womensJewelry,
    ],
    [womensTops, womensTrousers, womensShoes, womensHandbags, womensJewelry]
  );
  const kidsAllData = useMemo(
    () => [...kidsTopWear, ...kidsBottomWear, ...kidsShoes, ...kidsToys],
    [kidsTopWear, kidsBottomWear, kidsShoes, kidsToys]
  );
  const homeAllData = useMemo(
    () => [
      ...refrigerators,
      ...microwaves,
      ...washingMachines,
      ...vacuumCleaners,
    ],
    [refrigerators, microwaves, washingMachines, vacuumCleaners]
  );
  const allProducts = useMemo(
    () => [
      ...menAllData,
      ...womenAllData,
      ...kidsAllData,
      ...homeAllData,
      ...allElectronics,
    ],
    [menAllData, womenAllData, kidsAllData, homeAllData, allElectronics]
  );
  const value = {
    URL,
    PRODUCT_BASE_URL,
    fetchProductData,
    setFecthProductData,
    banners,
    shoppingOptions,
    mobiles,
    laptops,
    headphones,
    cameras,
    allElectronics,
    mensShirts,
    setMensShirts,
    mensPants,
    setMensPants,
    mensShoes,
    setMensShoes,
    mensAccessories,
    setMensAccessories,
    menAllData,
    womensTops,
    setWomensTops,
    womensTrousers,
    setWomensTrousers,
    womensShoes,
    setWomensShoes,
    womensHandbags,
    setWomensHandbags,
    womensJewelry,
    setWomensJewelry,
    womenAllData,
    kidsTopWear,
    setKidsTopWear,
    kidsBottomWear,
    setKidsBottomWear,
    kidsShoes,
    setKidsShoes,
    kidsToys,
    setKidsToys,
    kidsAllData,
    refrigerators,
    setRefrigerators,
    microwaves,
    setMicrowaves,
    washingMachines,
    setWashingMachines,
    vacuumCleaners,
    setVacuumCleaners,
    homeAllData,
    allProducts,
    userDetails,
    setUserDetails,
    cartItems,
    setCartItems,
    userLocalData,
    setUserLocalData,
    cartLength,
    setCartLength,
    TotalAmount,
    setTotalAmount,
  };
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};
