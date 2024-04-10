import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apartmentsList from "../../data/appartments.json";
import Slideshow from "../../components/Slideshow";
import "../../styles/components/_slideshow.scss";
import AccommodatContainer from "../../components/AccommodatContainer";
import "../../styles/pages/_accommodation.scss";
import "../../styles/components/_collapse.scss";
import Loader from "../../components/Loader";

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apartment = apartmentsList.find(apartment => apartment.id === id);

    if (!apartment) {
      navigate("/error");
    } else {
      setSelectedApartment(apartment)
      setIsLoading(false)
    }
  }, [id, navigate])

  if (isLoading) {
    return <Loader />
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
