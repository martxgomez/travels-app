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
            Welcome
            {/* <NavLink to="/">Welcome</NavLink> */}
          </li>
          <li>
            My Trips
            {/* <NavLink to="/personal">My trips</NavLink> */}
          </li>
          <li>
            {" "}
            Travelers' Corner
            {/* <NavLink to="/community">Travelers' Corner</NavLink> */}
          </li>
          <li>Meet the team {/* <NavLink to="/about">Meet the team</NavLink> */}</li>
        </ul>
      </section>

      <section className="user-profile">
        {/* <NavLink to="/user"></NavLink> */}
      </section>
    </nav>
  );
}
export default Navbar;
