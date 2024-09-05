import React, { useState } from 'react'
import logo from '../assets/KevinRushLogo.png'
import { FaLinkedin, FaTimes } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { CiMenuFries } from 'react-icons/ci'

const NavBar = () => {

  
  const [click, setClick] = useState(false);
   const handleClick = () => {
    setClick(!click)
   }

  const content = (
    <>
      <div className=" lg:hidden block absolute top-10 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home"> 
            <li className="text-white my-4 py-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="text-white my-4 py-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded">About</li>
          </Link>
          <Link spy={true} smooth={true} to="Tech">
            <li className="text-white my-4 py-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded">Technologies</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="text-white my-4 py-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="text-white my-4 py-4 border-b border-slate-700 hover:bg-slate-600 hover:rounded">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="  lg:opacity-40 bg-slate-900  ">
      <div className="fixed w-full h-10vh flex  justify-between z-50 text-white lg:py-5 px-10 py-4  ">
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex flex-row">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-300 hover:scale-110 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-300 hover:scale-110 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Tech">
                <li className="hover:text-fuchsia-300 hover:scale-110 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Technologies</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-fuchsia-300 hover:scale-110 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-300 hover:scale-110 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button onClick={handleClick} className="flex justify-end sm:hidden transition">
          {click ? <FaTimes/> : <CiMenuFries/> }
        </button>
      </div>
    </nav>
  );

  /* return (
    <div>
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center ">
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-xl '>
                <FaLinkedin></FaLinkedin>
                <FaGithub></FaGithub>
                <FaSquareXTwitter></FaSquareXTwitter>
                <FaDiscord></FaDiscord>
            </div>
        </nav>
    </div>
  ) */
}

export default NavBar