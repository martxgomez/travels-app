import "./Navbar.css";


import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo  from "../assets/profile-image.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <section className="logo-container">
        <Link to="/">
          <h1>ROUTIFY</h1>
        </Link>
      </section>

      <section className="info-container">
        <ul className="info-ul">
          <li>
            <NavLink to="/my-trips">My trips</NavLink>
          </li>
          <li>{<NavLink to="/community">Community</NavLink>}</li>
          <li>
            <NavLink to="/about">Meet the team</NavLink>
          </li>
        </ul>
      </section>

      <section className="user-profile">
        <Link to="/userpage">
          <img className="user-profile"
            src={logo} 
            alt="User Profile"
          />
        </Link>
      </section>
    </nav>
  );
}


export default Navbar;






