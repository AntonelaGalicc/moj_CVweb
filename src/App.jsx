import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Navbar";
function App() {
  const [language, setLanguage] = useState("HR");

  return (
    <Router>
      <Home language={language} setLanguage={setLanguage} />
      <Footer language={language} setLanguage={setLanguage} />
    </Router>
  );
}

export default App;
