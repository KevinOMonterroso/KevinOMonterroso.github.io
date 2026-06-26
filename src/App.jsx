import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Carousel from "./components/Carousel.jsx";


function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-neutral-50 pt-20 transition-colors duration-200 dark:bg-neutral-900">
        <Navbar />
        <Carousel/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Carousel/>
        <Footer />
      </div>
    </>
  );
}

export default App;
