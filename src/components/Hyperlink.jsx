const Hyperlink = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="text-zinc-900 dark:text-white hover:text-orange-400 dark:hover:text-orange-500 transition-colors duration-200 scroll-smooth font-medium"
    >
      <p>{text}</p>
    </a>
  );
};

export default Hyperlink;
