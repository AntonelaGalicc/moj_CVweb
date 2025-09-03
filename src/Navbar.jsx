import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Footer({ language, setLanguage }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <footer className="footer">
      <h1>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          Antonela Galić
        </a>
      </h1>

      <div className="footer-controls">
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <select value={language} onChange={handleLanguageChange}>
          <option value="HR">HR</option>
          <option value="EN">EN</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
