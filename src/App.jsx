import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
// import Work from "./components/Work";
import Workv2 from "./components/Workv2";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        {/* <Work /> */}
        <Workv2 />
        <Contact />
      </div>
    </>
  );
}

export default App;
