import React from "react";
import "../../styles/pages/_home.scss";
import "../../styles/components/_banner.scss";
import BannerImage from "../../assets/Image source 1.png";

function Home() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src={BannerImage} alt="Image source" />
      </div>
      <div className="banner-title">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Home;
