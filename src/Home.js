import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            description: "Studentica diplomskog studija Informatike, smjer Podatkovna znanost i inženjerstvo",
            buttons: ["O meni", "Projekti", "Vještine", "Kontakt"],
        },
        EN: {
            title: "Antonela Galić",
            subtitle: "Bachelor in Informatics | Aspiring Web Developer",
            description: "Graduate student of Informatics, specializing in Data Science and Engineering",
            buttons: ["About Me", "Projects", "Skills", "Contact"],
        },
    };
    const t = texts[language];
    return (_jsxs("div", { children: [_jsx("section", { className: "hero", children: _jsxs("div", { className: "hero-container", children: [_jsx("img", { src: mojaSlika, alt: "Moj CV", className: "hero-image" }), _jsxs("div", { className: "hero-text", children: [_jsx("h1", { children: t.title }), _jsx("h2", { children: t.subtitle }), _jsx("h3", { children: t.description }), _jsxs("div", { className: "hero-buttons", children: [_jsx("a", { href: "#aboutme", className: "btn", children: t.buttons[0] }), _jsx("a", { href: "#projects", className: "btn", children: t.buttons[1] }), _jsx("a", { href: "#skills", className: "btn", children: t.buttons[2] }), _jsx("a", { href: "#contact", className: "btn", children: t.buttons[3] })] }), _jsxs("div", { className: "socials", children: [_jsxs("a", { href: "https://github.com/AntonelaGalicc", target: "_blank", children: [_jsx(FaGithub, { size: 24 }), " GitHub"] }), _jsxs("a", { href: "https://www.linkedin.com/in/antonela-gali%C4%87-70b014367/", target: "_blank", children: [_jsx(FaLinkedin, { size: 24 }), " Linkedin"] }), _jsxs("a", { href: "mailto:galicantonela5@gmail.com", children: [_jsx(FaEnvelope, { size: 24 }), " Email"] })] })] })] }) }), _jsx(Aboutme, { language: language }), _jsx(Project, { language: language }), _jsx(Skils, { language: language }), _jsx(Contact, { language: language })] }));
}
export default Home;
