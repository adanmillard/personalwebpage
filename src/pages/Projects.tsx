import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectsCarousel } from "../Components/Projects/ProjectsCarousel";
import "../Components/Projects/projectsCarousel.css";

export const Projects = () => {
  const slide = [
    {
      url: "http://localhost:3000/Images/startLogin1.PNG",
      title: "Original Login",
      description:
        "This was the original login screen before I did the redesign for Digital Island",
    },
    {
      url: "http://localhost:3000/Images/updatedLogin1.PNG",
      title: "Redesigned Login",
      description:
        "This is the redesigned login, using CSHTML and CSS on .NET Core",
    },
  ];

  let navigate = useNavigate();

  const prevPage = () => {
    navigate("/workexperience");
  };

  const nextPage = () => {
    navigate("/");
  };

  return (
    <div className="test">
      <span className="prev-btn" onClick={prevPage}>
        ❰
      </span>
      <div className="main-container">
        <h1>Projects</h1>
        <div className="containerStyles">
          <ProjectsCarousel slide={slide} />
        </div>
      </div>
      <span className="next-btn" onClick={nextPage}>
        ❱
      </span>
    </div>
  );
};
