import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
// import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
