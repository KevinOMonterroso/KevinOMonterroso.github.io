import { useEffect } from "react";
import Projects from "../components/Projects.jsx"

const Home = () => {

  useEffect(() => {
  const container = document.getElementById("typewriter");
  if (!container) return;

  const timeouts = [];
  let cancelled = false;

  function runAnimation(text, i = 0) {
    if (cancelled) return;
    if (i === 0) container.textContent = "";
    container.textContent += text[i];
    if (i === text.length - 1) return;
    const id = setTimeout(() => runAnimation(text, i + 1), 100);
    timeouts.push(id);
  }

  runAnimation("Hola, soy Kevin!");

  return () => {
    cancelled = true;
    timeouts.forEach(clearTimeout);
  };
}, []);

  return (
    <div>
      <section
        id="hero"
        className="flex flex-row items-center justify-between m-8 text-center text-white md:m-18 lg:m-32 dark:text-neutral-900"
      >
        <div className="text-left">
            <h1 id="typewriter" className="mb-5 font-jetbrains-mono text-4xl font-bold text-neutral-900 md:text-5xl lg:text-7xl dark:text-white">
              
            </h1>
          <h2 className="mb-5 font-jetbrains-mono text-2xl text-emerald-500 md:text-3xl lg:text-4xl">
            Me gusta el desarrollo web
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl dark:text-neutral-300">
            Desarrollador Web Junior apasionado por crear aplicaciones web modernas y
            adaptativas. Disfruto aprender nuevas tecnologías y construir
            proyectos que resuelven problemas reales. Cuando no estoy programando, me
            encuentro explorando nuevos frameworks y mejorando mis habilidades.
          </p>
        </div>
      </section>
      <Projects/>
    </div>
  );
};

export default Home;
