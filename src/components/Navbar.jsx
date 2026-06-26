import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

  return (
    <header id="navbar" className="fixed top-0 z-50 w-full backdrop-blur-sm px-6 py-4 text-sm md:text-base lg:text-lg text-neutral-100 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <section className="flex items-center gap-2">
          <p className="font-bold text-neutral-900 transition-colors duration-200 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500">
            Kevin M.
          </p>
        </section>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="scroll-smooth font-medium text-neutral-900 transition-colors duration-200 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="scroll-smooth font-medium text-neutral-900 transition-colors duration-200 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500"
          >
            Sobre mí
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
