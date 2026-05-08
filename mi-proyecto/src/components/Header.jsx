import Hyperlink from "./Hyperlink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-transparent text-zinc-100 dark:text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <section className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">KM</span>
          </div>
          <p className="text-zinc-900 dark:text-white hover:text-orange-400 dark:hover:text-orange-500 transition-colors duration-200 font-medium">
            Kevin Monterroso
          </p>
        </section>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Hyperlink text="About" href="#about" />
            <Hyperlink text="Skills" href="#skills" />
            <Hyperlink text="Projects" href="#projects" />
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
