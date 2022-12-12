import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/NavBar/Navbar";
import { Homepage } from "./pages/Homepage";
import { WorkExperience } from "./pages/WorkExperience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar /> */}
        {/* <hr></hr> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        {/* <WorkExperience/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
