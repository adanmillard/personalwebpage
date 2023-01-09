import "./aboutmebody.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AboutMeBody = () => {
  let navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const mouseIn = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const nextPage = () => {
    navigate("/workexperience");
  };

  const previousPage = () => {
    navigate("..");
  };

  return (
    <div className="aboutme-main-container">
      <span onClick={previousPage} className="prev-btn">
        ❰
      </span>
      <div className="aboutme-text-container">
        <h1>Hello I'm Adan</h1>
        <h2>A Full Stack Developer</h2>
        <p>
          <b>This is a little bit about myself.</b>
        </p>
        <p>
          A personal passion of mine is, I love working on my car (180sx) which
          lets me gain mechanical skills and problem solving while being
          outside, I love old japanese cars from the 90's. I enjoy going to the
          gym and have a deep understanding of health and fitness.
        </p>
        <p>
          I have been studying Web Development with MRHQ since May 2022, where I
          have discovered a new love of software development. This has improved
          my problem solving capabilities. I finished studying with Mission
          Ready in December 2022 and now am on a path to continue my passion of
          Software Development.
        </p>
        <p>
          I have done an internship with{" "}
          <a
            href="https://digitalisland.co.nz/?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjT2Y8Z0y2xSu3lSRkNhpvHY9sUIfukzskAJuI6IQYXCIjT6bCSrIQgaAtEnEALw_wcB"
            target="_blank"
          >
            Digital Island
          </a>
          , where I learnt so much, a noticeable take away was agile practices,
          everything from daily stand ups to demos. I also learnt the Angular
          framework and started dabbling with .Net (Used for the backend on this
          site).
        </p>
        <p>
          Going forward I would really enjoy learning as much as I can in
          Software Development starting at the junior level and moving my way up
          to a senior position as well as helping others along the way, the same
          way as others have helped me on my journey.{" "}
        </p>
      </div>
      <div
        className="aboutme-image"
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        <span>{hover && <h1>The cats name is Bruce</h1>}</span>
        <img
          src="http://localhost:3000/Images/20221218_160902.jpg"
          alt="profile"
        />
      </div>
      <span onClick={nextPage} className="next-btn">
        ❱
      </span>
    </div>
  );
};
