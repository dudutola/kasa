import React from "react";
import { apartmentsList } from "../../data/apartments.js";
import "../../styles/pages/_home.scss";
import "../../styles/components/_banner.scss";
import "../../styles/components/_cards.scss";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/Image source 1.png";
import Card from "../../components/Card";

function Home() {

  return (
    <div className="container">
      <Banner
        imageUrl={BannerImage}
        alt="Sea and Rocks"
        title="Chez vous, partout et ailleurs"
        filterStyle={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      />
      <div className="cards">
        {apartmentsList.map(({ id, title, cover, location }) => (
          <Card
            key={id}
            id={id}
            title={title}
            cover={cover}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
