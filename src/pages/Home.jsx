import { useEffect, useState } from "react";
import profileImg from "../assets/img/profile.webp";
import Projects from "../components/Projects.jsx"

const Home = () => {

  const [text, setText] = useState("");

  useEffect(() => {
    const target = "Hola, soy Kevin!";
    let i = 0;
    const interval = setInterval(() => {
      setText(target.slice(0, i + 1));
      i++;
      if (i === target.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="flex flex-col-reverse items-center justify-between pt-10 pb-4 text-center text-white dark:text-neutral-900 md:flex-row"
      >
        <div className="text-left md:mr-2">
            <h1 id="typewriter" className="mb-2 font-bold text-3xl md:text-5xl lg:text-7xl text-neutral-900 dark:text-white">
              {text}
            </h1>
            <h2 className="text-emerald-400 text-lg md:text-xl xl:text-2xl">
              Desarrollador Web Junior
            </h2>
          <p className="max-w-4xl text-xl leading-relaxed text-neutral-700 md:text-2xl lg:text-3xl dark:text-neutral-300">
            Me encanta crear websites modernas, adaptables, interactivas y <em id="fun-text" className="text-bg-animation font-bold" >divertidas</em>.
            En mis tiempos libres me encuentras explorando y aprendiendo nuevas tecnologías.
          </p>
        </div>
        <img 
          src={profileImg}
          width={250}
          className="block mb-2 w-1/2 max-w-62.5 md:w-62.5 md:mb-0 md:inline-block 
            animate-reveal rounded-xl"  
          alt="Kevin Monterroso"
        />
      </section>
      <a 
        id="contact-me"
        className="bg-transparent border border-neutral-900 dark:border-neutral-50 
          text-body w-40 h-12 flex items-center 
          justify-center px-6 rounded-xl"
        href="#footer">
          Contáctame
      </a>
      <Projects/>
    </>
  );
};

export default Home;
