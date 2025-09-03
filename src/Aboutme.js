import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
function Aboutme({ language }) {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const texts = {
        HR: {
            title: "O meni",
            description: [
                "Pozdrav! Ja sam Antonela Galić, 24-godišnjakinja iz Posušja, studentica diplomskog studija informatike sa smjerom Podatkovna znanost i inženjerstvo.",
                "Strastvena sam prema web razvoju i modernim tehnologijama. Trenutno razvijam web aplikacije koristeći:",
                ["React", "JavaScript", "CSS", "TypeScript"],
                "Usmjerena sam i na backend tehnologije poput:",
                ["PHP", "Python", "FastAPI", "rad s bazama podataka"],
                "Kao studentica Data Sciencea, bavim se strojnim učenjem, analizom i vizualizacijom podataka.",
                "Također me zanima razvoj mobilnih aplikacija kroz Javu i Kotlin, što planiram dodatno razvijati u budućnosti.",
                "Osim tehničkih vještina, posvećena sam stalnom učenju i usavršavanju te se veselim novim izazovima i prilikama za profesionalni razvoj u svijetu tehnologije.",
            ],
        },
        EN: {
            title: "About Me",
            description: [
                "Hi! I'm Antonela Galić, a 24-year-old from Posušje, a graduate student in Informatics specializing in Data Science and Engineering.",
                "I'm passionate about web development and modern technologies. Currently, I build web applications using:",
                ["React", "JavaScript", "CSS", "TypeScript"],
                "I also explore backend technologies like:",
                ["PHP", "Python", "FastAPI", "databases"],
                "As a Data Science student, I work with machine learning, data analysis, and data visualization.",
                "I'm also interested in mobile app development using Java and Kotlin, which I plan to develop further in the future.",
                "Beyond technical skills, I'm committed to continuous learning and self-improvement and look forward to new challenges and opportunities for growth in the tech world.",
            ],
        },
    };
    const t = texts[language];
    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // animacija se pokreće samo jednom
                }
            });
        }, { threshold: 0.3 });
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);
    return (_jsx("section", { className: "aboutme", id: "aboutme", ref: containerRef, children: _jsxs("div", { className: `aboutme-container ${visible ? "visible" : ""}`, children: [_jsx("h2", { children: t.title }), t.description.map((item, index) => Array.isArray(item) ? (_jsx("ul", { children: item.map((tech, i) => (_jsx("li", { children: tech }, i))) }, index)) : (_jsx("p", { children: item }, index)))] }) }));
}
export default Aboutme;
