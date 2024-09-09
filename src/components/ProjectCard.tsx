interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

export const ProjectCard = ({
  title,
  description,
  link,
  icon,
}: ProjectCardProps) => {
  return (
    <div className="bg-white p-8 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-6xl opacity-20">{icon}</div>
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={link}
        className="inline-block bg-yellow-300 w-4/12 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
      >
        See more
      </a>
    </div>
  );
};
