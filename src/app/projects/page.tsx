import ParticlesBackground from "@/components/ParticlesBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { CiPillsBottle1 } from "react-icons/ci";
import { MdEventAvailable } from "react-icons/md";

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-20 px-6 overflow-hidden">
      <ParticlesBackground />
      {/* Dynamic background effect with particles */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center animate-move-slow"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center mb-16 text-white animate-fadeIn">
          My Projects
        </h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard
            title="Event Management App"
            description="A dynamic system built with React Native."
            link="https://github.com/ArturBDev/playlocal-app"
            icon={
              <MdEventAvailable className="text-5xl text-yellow-600 transition-transform duration-300 hover:scale-110" />
            }
          />
          <ProjectCard
            title="Event Management API"
            description="Connect for local sports using NestJS, Postgres, Prisma and Docker."
            link="https://github.com/ArturBDev/playlocal-api"
            icon={
              <MdEventAvailable className="text-5xl text-yellow-600 transition-transform duration-300 hover:scale-110" />
            }
          />
          <ProjectCard
            title="Pharma Management API"
            description="CRUD for a pharmacy API using NestJS, Postgres, Prisma and Docker."
            link="https://github.com/ArturBDev/jentz-api"
            icon={
              <CiPillsBottle1 className="text-5xl text-yellow-600 transition-transform duration-300 hover:scale-110" />
            }
          />
        </div>
      </div>
    </section>
  );
}
