import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        {/* Other components */}
        <div className="bg-primary">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
