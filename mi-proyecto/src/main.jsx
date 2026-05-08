import "./globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className="bg-zinc-100 dark:bg-zinc-900 h-auto min-h-screen transition-colors duration-200">
        <Home />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
