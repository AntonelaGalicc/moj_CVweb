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

  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2>{language === "HR" ? "Projekti" : "Projects"}</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              {project.image && <img src={project.image} alt={project.name} />}
              <h3>{project.name}</h3>
              <p>{project.description[language]}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
