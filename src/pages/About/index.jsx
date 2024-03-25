import React from "react";
import { aboutList } from "../../data/aboutList";
import "../../styles/components/_banner.scss";
import "../../styles/pages/_about.scss";
import "../../styles/components/_collapse.scss";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import BannerImage from "../../assets/Image source 2.png";

function About() {
  return (
    <div className="container-propos">
      <Banner
        imageUrl={BannerImage}
        alt="Mountains"
      />
      <div className="collapse">
        {aboutList.map(({ id, title, content }) => (
          <Collapse
            key={id}
            title={title}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
