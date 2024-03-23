import React from "react";
import "../../styles/pages/_home.scss";
import "../../styles/components/_banner.scss";
import "../../styles/components/_cards.scss";
import Banner from "../../components/Banner";
import { generateCards } from "../../components/Card";

function Home() {
  return (
    <main className="container">
      <Banner />
      <div className="cards">
        {generateCards(6)}
      </div>
    </main>
  );
}

export default Home;
