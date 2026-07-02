import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

  return (
    <header id="navbar" className="fixed top-0 z-50 w-full backdrop-blur-sm px-6 pt-4 text-sm md:text-base lg:text-lg text-neutral-100 dark:text-white">
      <div className="mx-auto mb-2 flex max-w-7xl items-center justify-between">
        <section className="flex items-center gap-2">
          <p className="font-bold text-neutral-900 transition-colors duration-200 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500">
            Kevin M.
          </p>
        </section>
        <nav className="flex items-center gap-5">
          <Link
            to="/"
            className="btn-glass scroll-smooth font-medium text-neutral-900 transition-colors duration-200 
            hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500
            bg-white/35  dark:bg-black/35 px-3 py-s rounded-xl"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="btn-glass scroll-smooth font-medium text-neutral-900 transition-colors duration-200 
            hover:text-emerald-600 dark:text-white dark:hover:text-emerald-500
            bg-white/35  dark:bg-black/35 px-3 py-s rounded-xl"
          >
            Sobre mí
          </Link>
          <div className="btn-glass flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-120">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <div id="carousel" className="stripes h-3 w-full overflow-x-hidden" />
    </header>
  );
};

export default Navbar;
