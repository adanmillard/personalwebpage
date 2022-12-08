import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import { Homepage } from "./pages/Homepage";
import { WorkExperience } from "./pages/WorkExperience"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <hr></hr> */}
      <Homepage />
      <WorkExperience/>
    </div>
  );
}

export default App;
