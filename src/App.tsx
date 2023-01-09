import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./Components/NavBar/Navbar";
import { Homepage } from "./pages/Homepage";
import { WorkExperience } from "./pages/WorkExperience";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        {/* <hr></hr> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
