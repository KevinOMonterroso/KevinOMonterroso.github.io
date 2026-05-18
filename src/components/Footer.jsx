import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-zinc-900 p-8 text-white dark:border-t-amber-50 dark:text-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex gap-4">
          <a
            href="https://github.com/KevinOMonterroso"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-400 hover:dark:bg-orange-500"
          >
            <FaGithub className="h-7 w-7 text-zinc-900 dark:text-amber-50" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-o-monterroso"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-400 hover:dark:bg-orange-500"
          >
            <FaLinkedin className="h-7 w-7 text-zinc-900 dark:text-amber-50" />
          </a>
          <a
            href="https://www.instagram.com/kevinomonterroso?utm_source=qr&igsh=b3g1bmwxcWx5dndw"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-400 hover:dark:bg-orange-500"
          >
            <RiInstagramFill className="h-7 w-7 text-zinc-900 dark:text-amber-50" />
          </a>
          <a
            href="mailto:kevinobedmm@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-400 hover:dark:bg-orange-500"
          >
            <MdEmail className="h-7 w-7 text-zinc-900 dark:text-amber-50" />
          </a>
        </div>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Kevin Monterroso. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
