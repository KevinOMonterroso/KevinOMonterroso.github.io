const SocialButton = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full hover:bg-orange-400 hover:dark:bg-orange-500 flex items-center justify-center transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
