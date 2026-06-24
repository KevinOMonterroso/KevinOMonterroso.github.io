function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center font-jetbrains-mono text-4xl font-bold text-emerald-500">
          Sobre Mí
        </h2>
        <div className="rounded-2xl bg-neutral-200 p-8 shadow-lg dark:bg-neutral-800">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Soy Kevin Monterroso, un Desarrollador Web Junior apasionado por
            crear aplicaciones web modernas y responsivas. Disfruto aprender
            nuevas tecnologías y construir proyectos que resuelven problemas reales.
            Cuando no estoy programando, me encuentras explorando nuevos frameworks
            y mejorando mis habilidades.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            No soy especialmente experto en ninguna tecnología por el momento, pero 
            estoy siempre dispuesto seguir aprendiendo y mejorar para adaptarme a
            cualquier entorno de trabajo que se me presente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
