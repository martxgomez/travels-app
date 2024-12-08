import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <section className="logo-container">
        <h1>NOMBRE PAGINA</h1>
      </section>

      <section className="info-container">
        <ul className="info-ul">
          <li>
            Home
            {/* <NavLink to="/">Home</NavLink> */}
          </li>
          <li>
            Your travels
            {/* <NavLink to="/personal">Your travels</NavLink> */}
          </li>
          <li>
            {" "}
            Traveler community
            {/* <NavLink to="/community">Traveler community</NavLink> */}
          </li>
          <li>About {/* <NavLink to="/about">About</NavLink> */}</li>
        </ul>
      </section>

      <section className="user-profile">
        {/* <NavLink to="/user"></NavLink> */}
      </section>
    </nav>
  );
}
export default Navbar;
