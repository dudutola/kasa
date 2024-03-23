import React from "react";
import "../../styles/components/_banner.scss";
import BannerImage from "../../assets/Image source 1.png";

function Banner() {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Sea and Rocks" />
      <div className="banner__overlay"></div>
      <div className="banner__title">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
