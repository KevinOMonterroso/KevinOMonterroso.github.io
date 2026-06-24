import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-neutral-900 p-8 text-white dark:border-t-neutral-200 dark:text-neutral-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex gap-4">
          <a
            href="https://github.com/KevinOMonterroso"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <FaGithub className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-o-monterroso"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <FaLinkedin className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
          <a
            href="https://www.instagram.com/kevinomonterroso?utm_source=qr&igsh=b3g1bmwxcWx5dndw"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <RiInstagramFill className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
          <a
            href="mailto:kevinobedmm@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <MdEmail className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
        </div>
        <p className="text-sm opacity-80 text-neutral-900 dark:text-neutral-200">
          © {new Date().getFullYear()} Kevin Monterroso. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
