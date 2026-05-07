const Hyperlink = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="text-white dark:text-zinc-900 hover:text-orange-400 dark:hover:text-orange-500 transition-colors duration-200 font-medium"
    >
      <p>{text}</p>
    </a>
  );
};

export default Hyperlink;
