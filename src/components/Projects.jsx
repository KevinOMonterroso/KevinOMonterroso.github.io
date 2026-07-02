import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Próximamente",
      description:
        "Un nuevo proyecto emocionante está en camino. ¡Mantente atento!",
      link: "#",
    },
    {
      title: "Próximamente",
      description:
        "Un nuevo proyecto emocionante está en camino. ¡Mantente atento!",
      link: "#",
    },
    {
      title: "Próximamente",
      description:
        "Un nuevo proyecto emocionante está en camino. ¡Mantente atento!",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-jetbrains-mono text-4xl font-bold text-body">
          Proyectos
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
