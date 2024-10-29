import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaGithubAlt, FaGithubSquare, FaNodeJs } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { SiMysql } from "react-icons/si";
import { TiHtml5 } from 'react-icons/ti'
import { IoLogoCss3 } from 'react-icons/io'
import { GrDocker } from "react-icons/gr";
import { motion } from "framer-motion";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const iconAnimation = (duration) => ({

    initial: { y: -10 },
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease:'linear',
            repeat: Infinity,
            repeatType: 'reverse'

        }
    }

})

const Technologies = () => {
  return (
    <div id='Tech' className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'><span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Tecnologias</span></h2>
        <div className="flex flex-wrap  items-center justify-center gap-4">
            <motion.div 
            variants={iconAnimation(2.5)}
            initial='initial'
            animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <TiHtml5 className='text-7xl text-[#E34C26]'/>
            </motion.div>
            <motion.div 
             variants={iconAnimation(2.2)}
             initial='initial'
             animate='animate'className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className='text-7xl text-[#2965f1]'/>
            </motion.div>
            <motion.div
             variants={iconAnimation(1.9)}
             initial='initial'
             animate='animate' 
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
             variants={iconAnimation(1.5)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
             variants={iconAnimation(2.5)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine  className='text-7xl text-metal'/>
            </motion.div>
            
            <motion.div 
             variants={iconAnimation(2.2)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className='text-7xl text-[#c72b2b]'/>
            </motion.div>
            <motion.div
             variants={iconAnimation(2.7)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithubSquare className='text-7xl text-white'/>
            </motion.div>
           
            <motion.div 
             variants={iconAnimation(2)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-[#00758F]'/>
            </motion.div>
           
            <motion.div 
             variants={iconAnimation(3)}
             initial='initial'
             animate='animate'
            className="brn rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className='text-7xl text-[#0db7ed]'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies