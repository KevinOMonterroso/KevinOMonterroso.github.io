import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col items-center justify-center w-full h-full py-8 gap-4 text-neutral-50 dark:text-neutral-900">
      <div className="flex flex-row justify-center items-center min-w-60 max-w-lg gap-5">
        {/* <p
          className="text-lg text-body"
        >
          Contáctame
        </p> */}
        <section 
          id="social-media"  
          className="flex flex-col items-center gap-1">
          <p className="font-medium text-body">Redes sociales</p>
          <div className="flex gap-1">
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
          </div>
        </section>
        <div id="separator" className="self-stretch border-r border-neutral-900/50 dark:border-neutral-50/50"/>
        <section
          id="contact-directly"
          className="flex flex-col items-center gap-1"
        >
          <p className="font-medium text-body">Contactar directamente</p>
          <div className="flex gap-1">
          <a
            href="mailto:kevinobedmm@gmail.com"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <MdEmail className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
          <a
            href="https://wa.me/50248133188"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 hover:bg-emerald-600 hover:dark:bg-emerald-500"
          >
            <IoLogoWhatsapp className="h-7 w-7 text-neutral-900 dark:text-neutral-200" />
          </a>
          </div>
        </section>
      </div>
      <p className="text-center text-sm opacity-80 text-neutral-900 dark:text-neutral-200">
        © {new Date().getFullYear()} Kevin Monterroso. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
