import { useState, useEffect } from "react";
import "./Navbar.scss";
import Netflix from "../assets/netflix-logo.png";
import Avatar from "../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
        <img
          className="nav_logo"
          src={Netflix}
          alt="Neflix"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="nav_avatar"
          src={Avatar}
          alt="Avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Navbar;
