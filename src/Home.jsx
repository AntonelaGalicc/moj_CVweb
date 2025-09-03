import mojaSlika from "./slike/zaCV.jpg";
import "./index.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Project from "./Project";
import Skils from "./Skils";

function Home({ language, setLanguage }) {
  const texts = {
    HR: {
      title: "Antonela Galić",
      subtitle: "Prvostupnica informatike | Web developer u nastajanju",
      description:
        "Studentica diplomskog studija Informatike, smjer Podatkovna znanost i inženjerstvo",
      buttons: ["O meni", "Projekti", "Vještine", "Kontakt"],
    },
    EN: {
      title: "Antonela Galić",
      subtitle: "Bachelor in Informatics | Aspiring Web Developer",
      description:
        "Graduate student of Informatics, specializing in Data Science and Engineering",
      buttons: ["About Me", "Projects", "Skills", "Contact"],
    },
  };

  const t = texts[language];

  return (
    <div>
      {/* Hero sekcija */}
      <section className="hero">
        <div className="hero-container">
          <img src={mojaSlika} alt="Moj CV" className="hero-image" />
          <div className="hero-text">
            <h1>{t.title}</h1>
            <h2>{t.subtitle}</h2>
            <h3>{t.description}</h3>

            {/* Gumbi */}
            <div className="hero-buttons">
              <a href="#aboutme" className="btn">
                {t.buttons[0]}
              </a>
              <a href="#projects" className="btn">
                {t.buttons[1]}
              </a>
              <a href="#skills" className="btn">
                {t.buttons[2]}
              </a>
              <a href="#contact" className="btn">
                {t.buttons[3]}
              </a>
            </div>

            {/* Social ikone */}
            <div className="socials">
              <a href="https://github.com/AntonelaGalicc" target="_blank">
                <FaGithub size={24} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/antonela-gali%C4%87-70b014367/"
                target="_blank"
              >
                <FaLinkedin size={24} /> Linkedin
              </a>
              <a href="mailto:galicantonela5@gmail.com">
                <FaEnvelope size={24} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcija O meni */}
      <Aboutme language={language} />
      {/* Projekt */}
      <Project language={language} />
      {/* Vještine */}
      <Skils language={language} />
      {/* Kontakt */}
      <Contact language={language} />

      {/* Ovdje možeš dodati formu za kontakt */}
    </div>
  );
}

export default Home;
