import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { SiMysql } from "react-icons/si";
import { TiHtml5 } from 'react-icons/ti'
import { IoLogoCss3 } from 'react-icons/io'
import { GrDocker } from "react-icons/gr";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'><span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Tecnologias</span></h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TiHtml5 className='text-7xl text-[#E34C26]'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className='text-7xl text-[#2965f1]'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className='text-7xl text-yellow-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-metal'/>
            </div>
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-[#44883e]'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className='text-7xl text-white'/>
            </div>
           
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-[#00758F]'/>
            </div>
           
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className='text-7xl text-[#0db7ed]'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies