import React from 'react';
import Image from 'next/image';
import webclone from "../app/(assets)/webclone.png";
import figmapic from "../app/(assets)/figmapic.png";
import loginpage from "../app/(assets)/loginpage.png";
import project from "../app/(assets)/project.jpg";
import image0 from "../app/(assets)/image0.png";
import image from "../app/(assets)/image.jpg";

function Projects() {
  return (
    <div id='projects' className='flex flex-col items-center pt-9 h-full bg-slate-100 py-12'>
      <h2 className='text-lg text-blue-400 font-medium'>Projects</h2><br />
      <h1 className='text-4xl text-gray-900 font-bold'>What I Have Made?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12 px-4">
        {[
          { src: webclone, title: "GIAIC Web Clone", description: "A fully responsive clone of the GIAIC website, built using modern web technologies to ensure a seamless user experience across all devices." },
        
          { src: loginpage, title: "Login Page", description: "A secure and user-friendly login/sign-up page, designed with a focus on accessibility and usability." },
          { src: project, title: "Complete E-Commerce Website", description: "A comprehensive e-commerce website with a robust backend, designed to provide a smooth shopping experience for users." },
        ].map((project, index) => (
          <div key={index} className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              className="rounded-2xl"
              src={project.src}
              alt={project.title}
              layout="responsive"
              objectFit="cover"
            />
            <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
              {project.title}
            </h3>
            <p className="text-sm pb-3 text-gray-500 px-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;