import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./homepageBody.css";

type IShowNav = {
  showNavComponent: (params: any) => any;
};

type RedirectFunction = (url: string, init?: number | ResponseInit) => Response;

export const HomepageBody = ({ showNavComponent }: IShowNav) => {
  let navigate = useNavigate();

  const handleRoute = () => {
    navigate("/workexperience");
  };

  return (
    <div className="homepage-body-container">
      <h1>It's Me Adan.</h1>
      <p onClick={handleRoute}>Let's continue...</p>
      <div className="homepage-icon-container">
        <a title="Linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/adanmillard" target="_blank" title="GitHub">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <i className="fa-solid fa-envelope" title="Email"></i>
      </div>
    </div>
  );
};
