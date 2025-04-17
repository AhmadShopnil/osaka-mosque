// components/Header.jsx
import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import HeroSlider from '../../shared/HeroSlider';

const Header = () => {
  return (
    <div className='relative w-full '>
   {/* <div className='relative w-full h-screen'> */}
    <Topbar/>
    <Navbar/>
    <HeroSlider/>

   </div>
  );
};

export default Header;
