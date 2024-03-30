import React from "react";
import { useParams } from "react-router-dom";
import { apartmentsList } from "../../data/apartments.js";
import Slideshow from "../../components/Slideshow";
import "../../styles/components/_slideshow.scss";
import AccommodatContainer from "../../components/AccommodatContainer";
import "../../styles/pages/_accommodation.scss";
import "../../styles/components/_collapse.scss";

function Accommodation() {
  const { id } = useParams();

  const selectedApartment = apartmentsList.find(apartment => apartment.id === id);

  if (!selectedApartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="container">
      <div className="accommodation">
        <Slideshow
          pictures={selectedApartment.pictures}
        />
        <AccommodatContainer
          id={selectedApartment.id}
          title={selectedApartment.title}
          description={selectedApartment.description}
          host={selectedApartment.host}
          rating={selectedApartment.rating}
          location={selectedApartment.location}
          equipments={selectedApartment.equipments}
          tags={selectedApartment.tags}
        />
      </div>
    </div>
  );
}

export default Accommodation;
