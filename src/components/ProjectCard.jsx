const ProjectCard = ({ title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-800"
    >
      <h3 className="mb-3 text-xl font-bold text-lime-400">{title}</h3>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">{description}</p>
      <span className="inline-flex items-center font-medium text-orange-400 hover:text-orange-500">
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-1 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </span>
    </a>
  );
};

export default ProjectCard;
