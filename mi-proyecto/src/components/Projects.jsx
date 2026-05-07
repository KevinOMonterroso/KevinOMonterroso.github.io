import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Coming Soon",
      description: "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
    {
      title: "Coming Soon",
      description: "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
    {
      title: "Coming Soon",
      description: "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-lime-400 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
