const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-row items-center justify-between text-center min-h-[60vh] bg-transparent dark:bg-zinc-900 text-white dark:text-zinc-900 px-4 py-16 gap-8"
    >
      <div className="text-left">
        <h1 className="text-zinc-900 dark:text-white text-5xl md:text-7xl lg:text-8xl font-bold p-4">
          Kevin Monterroso
        </h1>
        <h2 className="font-doto text-zinc-900 dark:text-white text-xl md:text-2xl lg:text-3xl mt-4 p-4">
          Junior Web Developer
        </h2>
      </div>
      <figure className="bg-orange-500 m-4 p-4 rounded-xl "></figure>
    </section>
  );
};

export default Hero;
