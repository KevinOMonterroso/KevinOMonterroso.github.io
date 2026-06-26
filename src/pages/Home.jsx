import { useEffect, useState } from "react";
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
        className="flex flex-row items-center justify-between m-10 text-center text-white md:m-16 lg:m-24 dark:text-neutral-900"
      >
        <div className="text-left 2xl:text-center">
            <h1 id="typewriter" className="mb-2  text-5xl font-bold text-neutral-900 md:text-6xl lg:text-7xl dark:text-white">
              {text}
            </h1>
          <p className="max-w-4xl text-xl leading-relaxed text-neutral-700 md:text-2xl lg:text-3xl dark:text-neutral-300">
            Me encanta crear websites modernas, adaptables, interactivas y <em id="fun-text" className="text-bg-animation font-bold" >divertidas</em>.
            En mis tiempos libres me encuentras explorando y aprendiendo nuevas tecnologías.
          </p>
        </div>
      </section>
      <Projects/>
    </>
  );
};

export default Home;
