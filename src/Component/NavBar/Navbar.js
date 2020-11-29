import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header_nav">
      <div className="nav_content">
        <h2 className="logo">
          <Link className="logo_link_test" to="/">
            ISHasan
          </Link>
        </h2>
        <nav className="nav">
          <ul className="nav_lists">
            <li className="nav_item">
              <NavLink className="nav_item_link_test" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_item_link_test" to="/About">
                About{" "}
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_item_link_test" to="/Templetlist">
                Templets{" "}
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav_item_link_test" to="/Contact">
                Contact{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header_buttons">
        <Link className="btn btn_login" to="/ligin">
          Log In
        </Link>
        <Link className="btn btn_signup" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
