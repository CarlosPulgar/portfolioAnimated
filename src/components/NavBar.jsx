import React from 'react'
import logo from '../assets/KevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'

const NavBar = () => {
  return (
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
  )
}

export default NavBar