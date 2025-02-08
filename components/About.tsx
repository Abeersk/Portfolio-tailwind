import React from 'react';
import Image from 'next/image';
import hero from "../app/(assets)/hero.jpg";

function About() {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full md:h-96 justify-center items-center bg-slate-100 py-12">
      <div className="flex items-center justify-center pt-12 md:w-2/3 w-full">
        <Image
          src={hero}
          alt="image"
          height={400}
          width={450}
          className="object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col md:w-1/2 w-full px-4 md:px-8 py-8">
        <h2 className="text-blue-300 text-sm font-semibold">About</h2>
        <h1 className="text-blue-950 text-5xl font-bold pt-4">About Me</h1>
        <p className="pt-4 text-justify">
          I am a dedicated and detail-oriented developer with experience in various web technologies. My journey in web development started with a curiosity for how websites work and has grown into a full-fledged passion for creating user-friendly and efficient digital experiences. I am always eager to learn new technologies and improve my skills.
        </p>
      </div>
    </div>
  );
}

export default About;