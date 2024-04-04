import React from "react";
import "../../styles/components/_banner.scss";

function Banner({ imageUrl, alt, filterStyle, marginBottom, overlayBackground, title, isHomePage }) {
  const bannerStyle = filterStyle ?
  { boxShadow: filterStyle.boxShadow } : {};

  const marginBottomStyle = isHomePage || marginBottom ? { marginBottom: '43px' } : {};

  return (
    <div className="banner" style={{...bannerStyle, ...marginBottomStyle}}>
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
