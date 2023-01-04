import React from "react";
import { ProjectsCarousel } from "../Components/Projects/ProjectsCarousel";
import "../Components/Projects/projectsCarousel.css";

export const Projects = () => {
  const slide = [
    { url: "http://localhost:3000/Images/startLogin1.PNG", title: "OG-login" },
    {
      url: "http://localhost:3000/Images/updatedLogin1.PNG",
      title: "new-login",
    },
  ];

  return (
    <div className="main-container">
      <h1>Projects</h1>
      <div className="containerStyles">
        <ProjectsCarousel slide={slide} />
      </div>
    </div>
  );
};
