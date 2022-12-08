import { useState } from "react";
import { HomepageBody } from "../Components/HomepageBody/HomepageBody";
import { Navbar } from "../Components/NavBar/Navbar";

export const Homepage: React.FC = () => {
  const [nav, setNav] = useState<Boolean>(false);

  const showNavComponent = () => {
    setNav(true);
  };

  return (
    <div>
      <>{nav && <Navbar />}</>
      <HomepageBody showNavComponent={showNavComponent} />
      
    </div>
  );
};
