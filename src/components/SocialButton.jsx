const SocialButton = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-400 hover:dark:bg-orange-500"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
