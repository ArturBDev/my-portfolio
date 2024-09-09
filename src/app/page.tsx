import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 animate-fadeIn text-shadow-lg">
          Hello, I am <span className="text-yellow-300">Artur Santos</span>
        </h1>
        <p className="text-2xl text-center mb-10 opacity-90 animate-slideIn delay-150">
          Software Engineer passionate about programming, innovation, and
          sports.
        </p>
        <a
          href="/projects"
          className="bg-yellow-300 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-400/50"
        >
          Check out my projects
        </a>
      </div>
    </section>
  );
}
