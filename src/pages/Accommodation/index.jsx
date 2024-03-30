import React from "react";
import { useParams } from "react-router-dom";
import { apartmentsList } from "../../data/apartments.js";
import "../../styles/components/_banner.scss";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/Image source 1.png";
import AccommodatContainer from "../../components/AccommodatContainer";
import "../../styles/pages/_accommodation.scss";
import "../../styles/components/_collapse.scss";

console.log(apartmentsList)

function Accommodation() {
  const { id } = useParams();

  const selectedApartment = apartmentsList.find(apartment => apartment.id === id);

  if (!selectedApartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="container">
      <Banner
        imageUrl={BannerImage}
        alt="Sea and Rocks"
        title="Chez vous, partout et ailleurs"
        filterStyle={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      />
      <AccommodatContainer
        id={selectedApartment.id}
        title={selectedApartment.title}
        pictures={selectedApartment.pictures}
        description={selectedApartment.description}
        host={selectedApartment.host}
        rating={selectedApartment.rating}
        location={selectedApartment.location}
        equipments={selectedApartment.equipments}
        tags={selectedApartment.tags}
      />
    </div>
  );
}



export default Accommodation;
