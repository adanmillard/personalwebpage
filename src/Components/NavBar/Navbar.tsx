import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <p>Adan Millard Personal Site</p>
      </div>
      <div className="nav-menu-items">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Hobbies</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
