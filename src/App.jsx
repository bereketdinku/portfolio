import "./app.scss";
import Test from "./Test";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Skills } from "./components/skills/Skills";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portofolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>

      {/* <Test /> */}
    </div>
  );
};

export default App;
