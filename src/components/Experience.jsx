import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div>
      <h2 className="my-20 text-center text-4xl "><span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Experiencia</span></h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p>{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "} <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span 
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
