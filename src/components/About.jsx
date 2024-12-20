import React from "react";
import aboutImg from "../assets/portfolioPicture2.jpg";
import { ABOUT_TEXT_ESP } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="About" className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-24 text-center text-4xl ">
        <span className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight text-transparent bg-clip-text">
          Sobre Mi
        </span>
      </h2>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT_ESP}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
