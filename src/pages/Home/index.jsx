import React, { useState, useEffect } from "react";
import "../../styles/pages/_home.scss";
import "../../styles/components/_banner.scss";
import "../../styles/components/_cards.scss";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/Image source 1.png";
// import { generateCards } from "../../components/Card";
import Card from "../../components/Card";
// import { appartmentsList } from "../../data/appartments.js";

function Home() {
  const [appartmentsDataList, setAppartmentsDataList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchApartments() {
      try {
        const response = await fetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`)
        const { appartmentList } = await response.json
        setAppartmentsDataList(appartmentList)
      } catch (error) {
        console.log('===== error =====', error)
        setError(true)
      }
    }
    fetchApartments()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  // (`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`)

   // useEffect(() => {
  //   async function fetchFreelances() {
  //     setDataLoading(true)

  //     try {
  //       const response = await fetch(`http://localhost:8000/freelances`)
  //       const { freelancersList } = await response.json() // on récupère les valeurs de la KEY (=== freelancersList) de notre object qui est dans l'API
  //       setFreelancersDataList(freelancersList)

  //     } catch (error) {
  //       console.log('===== error =====', error)
  //       setError(true)
  //     } finally {
  //       setDataLoading(false)
  //     }
  //   }
  //   fetchFreelances()
  // }, [])

  return (
    <div className="container">
      <Banner
        imageUrl={BannerImage}
        alt="Sea and Rocks"
        title="Chez vous, partout et ailleurs"
        filterStyle={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      />
     <div className="cards">
        {appartmentsDataList.map(({ id, cover, location }) => (
          <Card
            key={id}
            cover={cover}
            location={location}
          />
        ))}
      </div>
      {/* <div className="cards">
        {generateCards(6)}
      </div> */}
    </div>
  );
}
// https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json

export default Home;
