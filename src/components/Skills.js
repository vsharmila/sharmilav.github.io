import React from "react";

export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST APIs",
    "HTML / CSS / JavaScript",
    "Git & GitHub",
    "Maven / IntelliJ IDEA",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        {skills.map((s) => (
          <li
            key={s}
            style={{
              background: "#2a2a72",
              color: "white",
              padding: "10px 15px",
              borderRadius: "20px",
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
