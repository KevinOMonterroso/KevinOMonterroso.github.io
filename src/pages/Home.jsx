// import React from "react";

const Home = () => {
  return (
    <div
      id="hero"
      className="flex flex-row items-center justify-between p-8 text-center text-white md:p-18 lg:p-32 dark:text-zinc-900"
    >
      <div className="text-left">
        <h1 className="mb-5 text-4xl font-bold text-zinc-900 md:text-5xl lg:text-7xl dark:text-white">
          Junior Web Developer
        </h1>
        <h2 className="mb-5 text-2xl text-lime-400 md:text-3xl lg:text-4xl">
          Hi, I'm Kevin Monterroso
        </h2>
        <p className="text-lg leading-relaxed text-zinc-700 md:text-xl lg:text-2xl dark:text-zinc-300">
          A Junior Web Developer passionate about creating modern and responsive
          web applications. I enjoy learning new technologies and building
          projects that solve real problems. When I'm not coding, you'll find me
          exploring new frameworks and improving my skills.
        </p>
      </div>
    </div>
  );
};

export default Home;
