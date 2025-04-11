import React from 'react'
import Carosel from '../Components/Carosel';
import ShopOptions from '../Components/ShopOptions';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  return (
    <div className='overflow-hidden  mt-2 lg:mt-8'>
      <Carosel/>
      <ShopOptions/>
      <ProductCard/>
    </div>
  )
}

export default Home
