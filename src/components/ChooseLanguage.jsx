import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseLanguage = () => {
  const navigate = useNavigate();
  const handleProceedClick = () => {
    navigate('/chats');
  };
  return (
    <div>
      
      <h1 className='text-[#D9352E] text-xl font-bold text-center sm:p-5 lg:p-5  p-5 font-poppins'>Choose Language</h1>
      <div className='grid grid-cols-2 gap-1 gap-x-10 mx-10 lg:mx-12 lg:py-5 py-2 text-[#D9352E] text-sm sm:gap-1 sm:gap-x-4 '>
        <div className='bg-[#F7D7D5] border-2 border-[#F10086] w-[130%] sm:w-[100%] h-[90%] py-1  flex flex-col items-center justify-center rounded-2xl font-lato'>
          <p className='font-bold'>Hindi</p>
          <p className='text-xs '>हिन्दी</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%]  h-[90%] py-1  flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>English</h1>
          <p className='text-xs'>English</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1  flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Bangla</h1>
          <p className='text-xs '>বাংলা</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Kannada</h1>
          <p className='text-xs'>ಕನ್ನಡ</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%]  py-1 flex flex-col  items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Odisa</h1>
          <p className='text-xs'>ଓଡ଼ିଆ</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Assamese</h1>
          <p className='text-xs'>অসমীয়া</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Marathi</h1>
          <p className='text-xs'>मराठी</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Punjabi</h1>
          <p className='text-xs'>ਪੰਜਾਬੀ</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Tamil</h1>
          <p className='text-xs'>தமிழ்</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Malayalam</h1>
          <p className='text-xs'>മലയാളം</p>
        </div>
        <div className='bg-[#F7D7D5] border-2 border-[#f4c5c2] w-[130%] sm:w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato'>
          <h1 className='font-bold'>Gujarati</h1>
          <p className='text-xs'>ગુજરાતી</p>
        </div>
      </div>
      <div className='flex justify-center'>
      <button onClick={handleProceedClick} className='absolute bottom-5 bg-[#D9352E] px-7 py-2 text-white text-sm font-bold rounded-lg justify-center font-lato '>PROCEED</button>
      </div>
    </div>

  );
}

export default ChooseLanguage;