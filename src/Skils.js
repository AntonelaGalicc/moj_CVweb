import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./index.css";
function Skills({ language }) {
    const data = {
        HR: {
            title: "Vještine i Interesi",
            description: "Strastvena sam za rad u timu, poznavanje rada frontenda i backenda s težnjom ka usavršavanju backenda. Težim kontinuiranom učenju i usavršavanju. Glavni interes mi je usmjeren na razvoj backenda i baza podataka.",
            skills: [
                "Timwork i suradnja",
                "Backend razvoj",
                "Baze podataka (MySQL, Firebase, MongoDB)",
                "Stalno učenje i usavršavanje",
                "Problem solving",
                "React, Python, SQL",
            ],
        },
        EN: {
            title: "Skills and Interests",
            description: "I am passionate about working in a team, with knowledge of frontend and backend development, aiming to improve my backend skills. I strive for continuous learning and professional growth. My main interest is focused on backend development and databases.",
            skills: [
                "Teamwork and collaboration",
                "Backend development",
                "Databases (MySQL, Firebase, MongoDB)",
                "Continuous learning and improvement",
                "Problem solving",
                "React, Python, GO",
            ],
        },
    };
    const t = data[language];
    return (_jsx("section", { className: "skills", id: "skills", children: _jsxs("div", { className: "section-container", children: [_jsx("h2", { children: t.title }), _jsx("p", { children: t.description }), _jsx("ul", { children: t.skills.map((skill, idx) => (_jsx("li", { children: skill }, idx))) })] }) }));
}
export default Skills;
