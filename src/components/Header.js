import React from "react";

export default function Header() {
  return (
    <header>
      <h1>👋 Hi, I'm Sharmila V</h1>
      <p>Java + React Full Stack Developer</p>
      <a
        href="/resume.pdf"
        download
        style={{
          background: "white",
          color: "#282c34",
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Download Resume
      </a>
    </header>
  );
}
