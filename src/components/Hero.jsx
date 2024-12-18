import React from "react";
import { HERO_CONTENT2 } from "../constants/index";
import profilePic from "../assets/portfolioPicture.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: delay },
    },
  });

  return (
    <div  className="mt-[70px] border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Carlos Pulgar
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-end
            </motion.span>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT2}
            </motion.p>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img className="rounded-2xl"
             
              initial={{x: 100, opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              transition={{duration: 1.5, delay: 1.2}}
              src={profilePic}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
