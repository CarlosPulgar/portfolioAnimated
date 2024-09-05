import React, { useState } from 'react'
import { BsSun } from 'react-icons/bs'


const ThemeSwitch = () => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () =>{
        if (theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }
    console.log(theme);
    

  return (
    <button
        className='fixed bottom-5 right-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-[0.5rem] shadow-white shadow-2xl rounded-full flex items-center justify-center hover:scale-110  active:scale-105 transition:all'
        onClick={toggleTheme}
    >
        <BsSun></BsSun>
    </button>
  )
}

export default ThemeSwitch