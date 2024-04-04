import React from 'react';

const FooterButton = ({ onClick }) => {
    return (
        <div className='flex justify-center mt-3'>
            <button onClick={onClick} className='bg-[#D9352E] absolute bottom-6 px-6 py-2 text-white text-md font-bold rounded-lg font-lato'>
                PROCEED
            </button>
        </div>
    );
};

export default FooterButton;
