import { useState, useEffect } from "react";
import "./Navbar.scss";
import Netflix from "../assets/netflix-logo.png";
import Avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });
  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <div className="navbar_container">
        <img className="nav_logo" src={Netflix} alt="Neflix" />
        <img className="nav_avatar" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
