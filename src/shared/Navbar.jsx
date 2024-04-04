import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../images/back.svg';
import Clock from '../images/clock.svg';

const Navbar = ({text, url}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(url);
  };

  return (
    <div className='bg-[#D9352E] h-[11%] sm:h-[13%] md:h-[12%]
    lg:h-[10%] xl:h-[12%] 2xl:h-[12%] w-full flex flex-row items-center space-x-2 sm:space-x-5  px-4  rounded-t-3xl font-inter'>
      <img src={back} alt="back" className='h-[32%] w-[9%] sm:h-[35%] sm:w-10% xl:h-[30%]' onClick={handleBackClick}></img>
      <div>
        <h1 className='text-white font-bold  text-sm sm:text-sm  font-inter'>{text}</h1>
        <div className='flex flex-row items-center space-x-1'>
          <img src={Clock} className="h-[10%] w-[10%]" alt="timer"></img>
          <span className='text-white text-sm sm:text-sm '>A few minutes</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;