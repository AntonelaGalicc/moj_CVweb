import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FaGithub } from "react-icons/fa";
function Project({ language }) {
    const projects = [
        {
            name: "Posuško lito",
            description: {
                HR: "Web aplikacija za prikaz događaja u Posušju s loginom i notifikacijama.",
                EN: "Web app showing events in Posušje with login and notifications.",
            },
            image: "",
            github: "https://github.com/AntonelaGalicc/Posusko_lito.git",
            live: "",
        },
        {
            name: "Statistika i prediktivna analiza studenata",
            description: {
                HR: "Dashboard koji prikazuje statistike i prediktivne analize studenata.",
                EN: "Dashboard displaying statistics and predictive analytics of students.",
            },
            image: "",
            github: "https://github.com/AntonelaGalicc/AnalitikaUcenja.git",
            live: "",
        },
        {
            name: "Finance App",
            description: {
                HR: "Android aplikacija za upravljanje osobnim financijama s Firebase bazom.",
                EN: "Android app for managing personal finances using Firebase database.",
            },
            image: "",
            github: "https://github.com/AntonelaGalicc/FinaanceApp.git",
            live: "",
        },
        {
            name: "FreelanceUsluge",
            description: {
                HR: "Vue.js projekt fokusiran na interaktivne komponente i prikaz podataka.",
                EN: "Vue.js project focusing on interactive components and data display.",
            },
            image: "",
            github: "https://github.com/AntonelaGalicc/FinaanceApp.git",
            live: "",
        },
        {
            name: "React Band App",
            description: {
                HR: "Aplikacija omogućuje korisnicima da pretražuju bendove po imenu, pregledavaju njihove detalje, uključujući slike, biografije i društvene mreže.",
                EN: "The app lets users search for bands by name and view their details, including images, biographies, and social media links..",
            },
            image: "",
            github: "https://github.com/AntonelaGalicc/ReactBands.git",
            live: "",
        },
    ];
    return (_jsx("section", { className: "projects", id: "projects", children: _jsxs("div", { className: "section-container", children: [_jsx("h2", { children: language === "HR" ? "Projekti" : "Projects" }), _jsx("div", { className: "projects-grid", children: projects.map((project, idx) => (_jsxs("div", { className: "project-card", children: [project.image && _jsx("img", { src: project.image, alt: project.name }), _jsx("h3", { children: project.name }), _jsx("p", { children: project.description[language] }), _jsx("div", { className: "project-links", children: _jsxs("a", { href: project.github, target: "_blank", rel: "noreferrer", children: [_jsx(FaGithub, {}), " GitHub"] }) })] }, idx))) })] }) }));
}
export default Project;
