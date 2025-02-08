import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Image from "next/image";
import Profile from '@/app/(assets)/profile.jpg';

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-slate-100">
      <Header />

      <div className="flex flex-col md:flex-row w-full min-h-screen">
        <div className="flex flex-col md:w-[60%] w-full px-4 md:pr-20 md:pt-48 pt-24">
          <h2 className="text-blue-300 text-lg md:text-xl md:pl-48 pl-4">Hi Everyone, I am</h2>
          <h1 className="text-blue-800 font-extrabold text-4xl md:text-5xl text-center mt-4">Muhammad Abeer</h1>
          <p className="md:pl-36 pl-4 mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            I am a passionate web developer with a knack for creating elegant and efficient solutions. With a strong foundation in both frontend and backend technologies, I strive to build seamless and responsive web applications.
          </p>

          <div className="flex flex-row gap-4 items-center justify-center md:justify-start md:pl-36 mt-10">
            <button className="w-40 h-12 text-white rounded-lg text-sm bg-slate-900 font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg">
              Download CV
            </button>
            <button className="w-40 h-12 rounded-lg text-blue-950 text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg bg-slate-200 font-semibold">
              Explore More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center md:w-[40%] w-full md:pt-20 pt-10 px-4">
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src={Profile}
              alt="Muhammad Abeer Portfolio"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}