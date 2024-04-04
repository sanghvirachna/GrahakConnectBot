import React from 'react'
import Microphone from '../images/Microphone.svg'
import botchatlogo from '../images/botchatlogo.svg'
import send from '../images/send.svg'

const Chat = () => {
    return (
        <div className='w-full h-full'>
            <div className='h-[80%] flex flex-col justify-between space-y-4 p-4 overflow-y-auto font-bold'>
                <div className='flex items-end space-x-1 '>
                    <img src={botchatlogo} alt="Chatbot Logo" className='h-[60%] w-[9%]' />
                    <div className='rounded-lg bg-[#EBEBEB] text-xs text-black p-2 w-4/5'>
                        <p className='font-inter'>👋 गवर्नमेंट ई मार्केटप्लेस के ग्राहक कनेक्ट पोर्टल में आपका स्वागत है, अपनी समस्या चुनें।</p>
                    </div>
                </div>
                <div className='rounded-lg text-xs bg-[#F7D7D5] text-black p-2 ml-9 w-4/5 self-start'>
                    <p className='font-inter'>मैं अपनी उत्पाद सूची को कैसे अद्यतन या संपादित कर सकता हूँ?</p>
                </div>
                <div className='rounded-lg bg-[#F7D7D5] text-xs text-black p-2 ml-9 w-4/5 self-start'>
                    <p className='font-inter'>मुझे अपने खाते तक पहुँचने में समस्याएँ आ रही हैं। क्या आप मदद कर सकते हैं?</p>
                </div>
                <div className='rounded-lg text-xs bg-[#F7D7D5] text-black ml-9 p-2 w-4/5 self-start'>
                    <p className='font-inter'>किसी लेनदेन या विक्रेता/खरीदार के व्यवहार के संबंध में शिकायत दर्ज करने की प्रक्रिया क्या है?</p>
                </div>
                <p className='text-xs text-[#737376] ml-9 font-inter'>Grahak Connect<span className='mx-1'>·</span>Just now</p>
                <div className='rounded-lg bg-[#D9352E] text-xs text-white p-2 w-4/5 self-end'>
                    <p className='font-inter'>मैं अपनी उत्पाद सूची को कैसे अद्यतन या संपादित कर सकता हूँ?</p>
                </div>
                <div className='rounded-lg bg-[#D9352E] text-xs text-white p-2 w-4/5 self-end'>
                    <p className='font-inter'>मैं अपनी उत्पाद सूची को कैसे अद्यतन या संपादित कर सकता हूँ?</p>
                </div>
                <p className='text-xs text-[#737376] ml-9 self-end font-inter'>2m ago<span className='mx-1'>·</span>Seen</p>
            </div>
            {/* input */}
            <div className='mt-9 sm:mt-0 flex w-full items-center  px-3 absolute bottom-4'>
                <div className='flex-grow w-[80%] flex items-center border-2 border-gray-300 rounded-3xl px-5 py-1 bg-white'>
                    <input type='text' className='flex-grow bg-transparent outline-none font-baloo2' placeholder='शुरू करें...' />
                    <img src={Microphone} alt="Microphone" className='ml-2 h-[10%] w-[5%]' />
                </div>
                <button className='ml-2 bg-[#D9352E] p-2 rounded-full'>
                    <img src={send} alt="Send" className='h-6 w-full' />
                </button>
            </div>
        </div>
    )
}

export default Chat