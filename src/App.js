import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "./components/hero";
import Nav from "./components/nav";
import About from "./components/about";
import ProjectsSection from "./components/projectssection";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <ProjectsSection />
    </div>
  );
}

export default App;
