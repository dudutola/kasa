import React from "react";
// import "../../styles/pages/_home.scss";
import "../../styles/components/_banner.scss";
// import "../../styles/components/_cards.scss";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/Image source 2.png";

function About() {
  return (
    <div className="container">
      <Banner
        imageUrl={BannerImage}
        alt="Mountains"
      />
      {/* <div className="cards">
      </div> */}
    </div>
  );
}

export default About;
