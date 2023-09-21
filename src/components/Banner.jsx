import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://nadiaespallargas.es/wp-content/uploads/2019/06/netflix-banner-2.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner_description">This is a test description</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
