import React from "react";
import "../../styles/components/_banner.scss";

function Banner({ imageUrl, alt, filterStyle, overlayBackground, title, isHomePage }) {
  const bannerStyle = filterStyle ?
  { boxShadow: filterStyle.boxShadow } : {};

  return (
    <div className="banner" style={bannerStyle}>
      <img src={imageUrl} alt={alt}  />
      <div className="banner__overlay" style={{ background: overlayBackground}}></div>
      {isHomePage && (
        <div className="banner__title">
        { title && <h1>{title}</h1> }
        </div>
      )}
    </div>
  );
}

export default Banner;
