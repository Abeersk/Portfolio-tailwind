import React from 'react'
import Image from 'next/image'
import xyz from "../app/(assets)/xyz.jpeg";
import image from "../app/(assets)/image.jpg"
import project from "../app/(assets)/project.jpg";
import image0 from "../app/(assets)/image0.png"
import loginpage from "../app/(assets)/loginpage.png"
import webclone from "../app/(assets)/webclone.png"
import figmapic from "../app/(assets)/figmapic.png"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaLaravel, FaJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss,  } from 'react-icons/si';
import Footer from "../components/Footer"
import Header from "../components/Header"

function page() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
<Header/>
<div className="flex flex-col md:flex-row w-full min-h-screen">
  {/* Left Section: Text */}
  <div className="flex flex-col md:w-[60%] w-full px-4 md:pr-20 md:pt-48 pt-24">
    <h2 className="text-blue-300 text-lg md:text-xl md:pl-48 pl-4">
      Hi Everyone, I am
    </h2>
    <h1 className="text-blue-800 font-extrabold text-4xl md:text-5xl text-center mt-4">
      Hussain Ali
    </h1>
    <p className="md:pl-36 pl-4 mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
      accusamus corporis assumenda reiciendis iste commodi eveniet omnis quod 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>

    <div className='flex flex-row gap-4 items-center justify-center md:justify-start md:pl-36 mt-10'>
      <button className='w-40 h-12 text-white rounded-lg text-sm bg-slate-900 font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg'>
        Download CV
      </button> 
      <button className='w-40 h-12 rounded-lg text-blue-950 text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg bg-slate-200 font-semibold'>
        Explore More
      </button>
    </div>
  </div> 

  {/* Right Section: Image */}
  <div className="flex justify-center items-center md:w-[40%] w-full md:pt-20 pt-10 px-4">
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image 
        src={xyz} 
        alt="Hussain Ali Portfolio"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-2xl"
        priority
      />
    </div>
  </div>
</div>
                  {/* About Section */}
                  <div id="about" className="flex flex-col md:flex-row w-full md:h-96 justify-center">
      {/* Left Section: Image */}
      <div className="flex items-center justify-center pt-12 md:w-2/3 w-full">
        <Image src={xyz} alt="image" height={400} width={450} className="object-cover" />
      </div>

      {/* Right Section: Text */}
      <div className="flex flex-col md:w-1/2 w-full px-4 md:px-8 py-8">
        <h2 className="text-blue-300 text-sm font-semibold">About</h2>
        <h1 className="text-blue-950 text-5xl font-bold pt-4">About Me</h1>
        <p className="pt-4 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit provident, officia dolore ipsa ad autem molestias nemo enim voluptate eos est ratione nisi inventore officiis natus consectetur ex soluta voluptatum!
          Corporis quidem rerum non atque veniam fugiat sed porro expedita, laudantium quod cum dolorum recusandae dolores magnam reprehenderit minima odio, voluptatibus voluptates error corrupti? Eaque voluptate distinctio beatae. Porro, deserunt.
          Odit quis, excepturi tenetur, magni a consequuntur dolore sunt praesentium, consectetur unde quasi corrupti blanditiis ex. Eligendi suscipit beatae et? Reiciendis velit ad, et ullam rerum delectus fugit obcaecati molestias!
        </p>
      </div>
    </div>



                      {/* Skills Section */}
            <div id='skills' className='flex flex-col justify-center items-center bg-slate-300 h-80 w-full'>
              <h2 className='text-lg text-blue-400 font-medium'>skills</h2>
              <h1 className='text-4xl text-gray-900 font-semibold'>What i am capable of?</h1><br /> 


              {/* Icons */}
              <div className="flex space-x-6 items-center justify-center pt-9 p-4 rounded-md">
      <FaHtml5 size={80} color="#E34F26" />
      <FaCss3Alt size={80} color="#1572B6" />
      <FaBootstrap size={80} color="#7952B3" />
      <SiTailwindcss size={80} color="#06B6D4" />
      <FaPhp size={80} color="#777BB4" />
      <FaLaravel size={80} color="#FF2D20" />
      <FaJs size={80} color="" />
      <FaPython size={80} color="darkblue" />
      
         </div>
            </div>
<div id='projects' className='flex flex-col items-center pt-9 h-full '>

<h1 className='text-lg text-blue-400 font-medium'>Projects</h1><br />
<h1 className='text-4xl text-gray-900 font-bold'>What i Have made?</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12 px-4">
      {/* Project 1 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={webclone}
          alt="project web clone"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          GIAIC Web Clone
        </h3>
        <p className="text-sm pb-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing. Iste totam quaerat
          tempora exercitationem excepturi.
        </p>
      </div>

      {/* Project 2 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={figmapic}
          alt="project Figma portfolio"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          Figma Project
        </h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit elit. In ea eos veritatis quas illo odio. This is a
          Figma assignment.
        </p>
      </div>

      {/* Project 3 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={loginpage}
          alt="Login/SignUp page"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          Login Page
        </h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>

      {/* Project 4 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={project}
          alt="project web clone"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          Complete E-Commerce website
        </h3>
        <p className="text-sm pb-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing. Iste totam quaerat
          tempora exercitationem excepturi.
        </p>
      </div>

      {/* Project 5 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={image0}
          alt="project Figma portfolio"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          Website Project
        </h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit elit. In ea eos veritatis quas illo odio. This is a
          Figma assignment.
        </p>
      </div>

      {/* Project 6 */}
      <div className="rounded-2xl shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={image}
          alt="Login/SignUp page"
          layout="responsive"
          objectFit="cover"
        />
        <h3 className="p-5 text-lg text-gray-500 flex justify-center font-bold rounded-lg">
          Website Page
        </h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    </div>
             </div>
         
         <Footer/>
              </div>



    
  )
}

export default page