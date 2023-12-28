import About from "./components/Navbar/About";
import BottomNavBar from "./components/Navbar/BottomNavBar";
import Contact from "./components/Navbar/Contact";
import Home from "./components/Navbar/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Navbar/Skills";
import Work from "./components/Navbar/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Work/>
      <Contact/>
      <BottomNavBar/>
    </div>
  );
}

export default App;
