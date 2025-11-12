import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Tailoring App",
      desc: "A full stack Spring Boot + React app for managing orders, customers, and delivery status.",
      link: "https://github.com/sharmilav/tailoringapp",
    },
    {
      name: "Employee CRUD",
      desc: "React + Spring Boot + MySQL CRUD web application.",
      link: "https://github.com/sharmilav/employee-crud",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
