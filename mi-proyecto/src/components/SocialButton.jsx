const SocialButton = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-lime-400 hover:bg-lime-300 flex items-center justify-center transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
