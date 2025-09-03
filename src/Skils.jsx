import React from "react";
import "./index.css";

function Skills({ language }) {
  const data = {
    HR: {
      title: "Vještine i Interesi",
      description:
        "Strastvena sam za rad u timu, poznavanje rada frontenda i backenda s težnjom ka usavršavanju backenda. Težim kontinuiranom učenju i usavršavanju. Glavni interes mi je usmjeren na razvoj backenda i baza podataka.",
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
      description:
        "I am passionate about working in a team, with knowledge of frontend and backend development, aiming to improve my backend skills. I strive for continuous learning and professional growth. My main interest is focused on backend development and databases.",
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

  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <ul>
          {t.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
