const Hyperlink = ({ text, href = "#" }) => {
  return (
    <nav>
      <a
        href={href}
        className="scroll-smooth font-medium text-zinc-900 transition-colors duration-200 hover:text-orange-400 dark:text-white dark:hover:text-orange-500"
      >
        {text}
      </a>
    </nav>
  );
};

export default Hyperlink;
