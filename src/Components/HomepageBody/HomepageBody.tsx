import "./homepageBody.css";

type IShowNav = {
  showNavComponent: (params: any) => any;
};

export const HomepageBody = ({ showNavComponent }: IShowNav) => {
  return (
    <div className="homepage-body-container">
      <h1>It's Me Adan.</h1>
      <p>Let's continue...</p>
      <div className="homepage-icon-container">
        <a title="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/adanmillard" target="_blank" title="GitHub"><i className="fa-brands fa-square-github"></i></a>
        <i className="fa-solid fa-envelope" title="Email"></i>
      </div>
    </div>
  );
};
