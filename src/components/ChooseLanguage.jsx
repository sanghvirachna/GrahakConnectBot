import React, { useState,useContext ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ChooseLanguage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleProceedClick = () => {
    if (selectedLanguage) {
      console.log(selectedLanguage);
      setUser({ ...user, language: selectedLanguage });
      console.log(user);
      navigate('/chats');
    } else {
      alert("Please select a language.");
    }
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  
  return (
    <div>
      <h1 className='text-[#D9352E] text-xl font-bold text-center sm:p-5 lg:p-5  p-5 font-poppins'>Choose Language</h1>
      <div className='grid grid-cols-2 gap-1 gap-x-10 mx-10 lg:mx-12 lg:py-5 py-2 text-[#D9352E] text-sm sm:gap-1 sm:gap-x-4 '>
        <LanguageOption language="Hindi" script="हिन्दी" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="English" script="English" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Bangla" script="বাংলা" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Kannada" script="ಕನ್ನಡ" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Odisa" script="ଓଡ଼ିଆ" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Assamese" script="অসমীয়া" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Marathi" script="मराठी" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Punjabi" script="ਪੰਜਾਬੀ" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Tamil" script="தமிழ்" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Malayalam" script="മലയാളം" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
        <LanguageOption language="Gujarati" script="ગુજરાતી" selectedLanguage={selectedLanguage} handleLanguageClick={handleLanguageClick} />
      </div>
      <div className='flex justify-center'>
        <button onClick={handleProceedClick} className='absolute bottom-5 bg-[#D9352E] px-7 py-2 text-white text-sm font-bold rounded-lg justify-center font-lato'>PROCEED</button>
      </div>
    </div>
  );
}

const LanguageOption = ({ language, script, selectedLanguage, handleLanguageClick }) => {
  return (
    <div className={`bg-[#F7D7D5] border-2 ${selectedLanguage === language ? 'border-[#F10086]' : 'border-[#F4C5C2]'} w-[130%] sm:w-[100%] h-[90%] py-1  flex flex-col items-center justify-center rounded-2xl font-lato`} onClick={() => handleLanguageClick(language)}>
      <h1 className='font-bold'>{language}</h1>
      <p className='text-xs'>{script}</p>
    </div>
  );
}

export default ChooseLanguage;
