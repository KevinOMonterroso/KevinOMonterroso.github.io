import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <>
      <Navbar />
      <div className="flex mt-20  px-10 md:px-16 xl:px-24 flex-col justify-between 
        transition-colors duration-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div id="carouselB" className="stripesB px-6 h-3 w-full overflow-hidden" />
      <Footer />
    </>
  );
}

export default App;
