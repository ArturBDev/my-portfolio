import ParticlesBackground from "@/components/ParticlesBackground";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"; // Icons for email, GitHub, and LinkedIn

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-20">
      <ParticlesBackground />
      <h1 className="text-5xl font-bold mb-8 animate-fadeIn">Contact</h1>

      {/* Floating contact card */}
      <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out max-w-md w-full text-center animate-fadeIn delay-150">
        <p className="text-lg mb-6">
          Want to get in touch? Send an email or connect through the networks
          below:
        </p>

        {/* Email */}
        <a
          href="mailto:arturbernardo49@gmail.com"
          className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition duration-300 font-bold mb-4"
        >
          <AiOutlineMail className="mr-2 text-2xl" /> Send Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ArturBDev"
          className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-full transition duration-300 font-bold mb-4"
        >
          <AiOutlineGithub className="mr-2 text-2xl" /> GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/arturbernardosantos"
          className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition duration-300 font-bold"
        >
          <AiOutlineLinkedin className="mr-2 text-2xl" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
