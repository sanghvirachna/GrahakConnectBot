import React, { useState } from 'react';

import Navbar from '../shared/Navbar';
import ChatPage from '../components/ChatPage';

import CloseButton from '../shared/CloseButton';

const ChatWindow = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [buttonRotation, setButtonRotation] = useState('rotate(270deg)');

  const handleClose = () => {
    setButtonRotation('rotate(90deg)');
    setTimeout(() => setShowComponents(false), 500); // Adjust the timeout to match your animation duration
  };

  const handleOpen = () => {
    setButtonRotation('rotate(270deg)');
    setShowComponents(true);
  };

  return (
    <>
      {showComponents && (
        <div className={`w-[95%] h-[90%] p-4 sm:p-0 sm:w-1/2 sm:h-[75%] md:w-[35%] lg:w-[33%] xl:w-[33%] 2xl:w-[27%] fixed right-5 bottom-15  sm:bottom-20 sm:right-10 rounded-3xl shadow-lg bg-gray`}>
          <Navbar text="Government E-marketplace" url="/language" />
          <ChatPage />
        </div>
      )}
      {!showComponents && (
        <div className=' w-[25rem] h-[35rem] sm:w-[25rem] sm:h-[28rem] rounded-full flex items-center justify-center fixed right-3 bottom-20 sm:bottom-20 sm:right-10 '>
        </div>
      )}
      <div className='w-[10%] h-[10%] fixed right-5 bottom-15 sm:bottom-20 sm:right-10'>
        <CloseButton rotation={buttonRotation} onClick={showComponents ? handleClose : handleOpen} />
      </div>
    </>
  );
};

export default ChatWindow;