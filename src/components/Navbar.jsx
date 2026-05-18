// import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-transparent p-10 text-zinc-100 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <section className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
            <span className="text-lg font-bold text-white">KM</span>
          </div>
          <p className="font-medium text-zinc-900 transition-colors duration-200 hover:text-orange-400 dark:text-white dark:hover:text-orange-500">
            Kevin Monterroso
          </p>
        </section>
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex"></div>
          <Link
            to="/"
            className="scroll-smooth font-medium text-zinc-900 transition-colors duration-200 hover:text-orange-400 dark:text-white dark:hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="scroll-smooth font-medium text-zinc-900 transition-colors duration-200 hover:text-orange-400 dark:text-white dark:hover:text-orange-500"
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
