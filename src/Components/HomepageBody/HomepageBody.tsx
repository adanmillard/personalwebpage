import "./homepageBody.css";

type IShowNav = {
  showNavComponent: (params: any) => any;
};

export const HomepageBody = ({ showNavComponent }: IShowNav) => {
  return (
    <div className="homepage-body-container">
      <h1>It's Me Adan.</h1>
      <p>Let's continue...</p>
      <div>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-github"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  );
};
