import Image from "next/image";
import Me from "../../assets/me.jpg";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function About() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-20 px-4 overflow-hidden">
      <ParticlesBackground />
      <div className="animate-fadeIn delay-500 z-10 relative group">
        <Image
          src={Me}
          alt="Artur Santos"
          className="w-40 h-40 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full border-4 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      </div>
      <div className="mb-10 text-center z-10">
        <h1 className="text-6xl font-extrabold mb-4 animate-fadeIn tracking-wide">
          About Me
        </h1>
        <div className="w-24 h-1 bg-yellow-300 mx-auto animate-slideIn"></div>
      </div>
      <div className="max-w-3xl text-center space-y-6 z-10 animate-fadeIn delay-300">
        <p className="text-lg leading-relaxed">
          I am a software engineer focused on innovation and web development. I
          have experience in React, NextJS, TypeScript, NestJS and I am always
          looking to learn more about new technologies.
        </p>
        <p className="text-lg leading-relaxed">
          Additionally, I am passionate about sports like volleyball and soccer,
          and I love creating solutions that connect people through technology.
        </p>
        <a
          href="/projects"
          className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-400/50"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}
