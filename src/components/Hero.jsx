const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-row items-center justify-between p-8 text-center text-white md:p-18 lg:p-32 dark:text-neutral-900"
    >
      <div className="text-left">
        <h1 className="mb-5 font-jetbrains-mono text-4xl font-bold text-neutral-900 md:text-5xl lg:text-7xl dark:text-white">
          Desarrollador Web Junior
        </h1>
        <h2 className="mb-5 font-jetbrains-mono text-2xl text-emerald-500 md:text-3xl lg:text-4xl">
          Hola, soy Kevin Monterroso
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl dark:text-neutral-300">
          Desarrollador Web Junior apasionado por crear aplicaciones web modernas y
          responsivas. Disfruto aprender nuevas tecnologías y construir
          proyectos que resuelven problemas reales. Cuando no estoy programando, me
          encuentras explorando nuevos frameworks y mejorando mis habilidades.
        </p>
      </div>
    </section>
  );
};

export default Hero;
