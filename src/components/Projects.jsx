import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Coming Soon",
      description:
        "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
    {
      title: "Coming Soon",
      description:
        "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
    {
      title: "Coming Soon",
      description:
        "A new exciting project is on the way. Stay tuned for updates!",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-lime-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
