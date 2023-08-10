import "./App.css";
import Bubbles from "./animation/Bubbles";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div className="App">
      <Bubbles />
      <main>
        <Header />
        <Navbar />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
