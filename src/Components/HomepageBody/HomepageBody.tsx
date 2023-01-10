import { useNavigate } from "react-router-dom";
import "./homepageBody.css";

type IShowNav = {
  showNavComponent: (params: any) => any;
};

export const HomepageBody = ({ showNavComponent }: IShowNav) => {
  let navigate = useNavigate();

  const handleRoute = () => {
    navigate("/aboutme");
  };

  return (
    <div className="homepage-body-container">
      <h1>Adan Millard</h1>
      <p onClick={handleRoute}>
        <b>Let's continue...</b>
      </p>
      <div className="homepage-icon-container">
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/adan-millard-62a469221/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/adanmillard" title="GitHub">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <i className="fa-solid fa-envelope" title="Email"></i>
      </div>
    </div>
  );
};
