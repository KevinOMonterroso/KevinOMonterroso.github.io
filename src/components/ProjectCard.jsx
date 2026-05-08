const ProjectCard = ({ title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-lime-400 mb-3">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
      <span className="inline-flex items-center text-orange-400 hover:text-orange-500 font-medium">
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 ml-1"
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
