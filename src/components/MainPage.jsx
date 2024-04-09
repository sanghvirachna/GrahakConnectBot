import React,{useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hello from '../images/hello.svg';
import namaste from '../images/namaste.svg';
import {UserContext} from '../UserContext'
const MainPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleStartClick = async () => {
    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response.data.ip);
    setUser({ ...user, ipAddress: response.data.ip });
    navigate('/language');
  };
  

  return (
    <div className='w-full h-[90%] rounded-3xl flex flex-col items-center justify-center'>
      <div className='w-[80%] h-[60%]'>
        <img src={hello} alt="Temp" className='w-full h-full object-fill' />
      </div>
      <div className='w-full h-[20%]'>
        <img src={namaste} alt="Temp" className='w-full h-[90%] object-fill' />
      </div>
      <div className='absolute flex justify-center bottom-0 border-t-2 w-full'>
        <button onClick={handleStartClick} className='my-5 font-lato sm:my-2 bg-[#D9352E] px-8 py-2 text-white text-md font-bold rounded-lg'>START</button>
      </div>
    </div>
  );
}

export default MainPage;