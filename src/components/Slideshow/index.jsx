import { useState } from "react";
import LessThan from "../../assets/arrow_back_ios-24px 1.png";
import GreaterThan from "../../assets/arrow_forward_ios-24px 1.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrevious() {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    ))
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => (
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    ))
  }

  return (
    <div className="slideshow">
      {pictures.map((picture, index) => (
        <img src={picture} alt="L'appartement en détails" key={index} className={index === currentIndex ? 'slideshow__banner' : 'slideshow__banner active'}/>
      ))}
      <div className="slideshow__arrows">
        <img src={LessThan} alt="L'appartement en détails" onClick={handlePrevious} />
        <img src={GreaterThan} alt="L'appartement en détails" onClick={handleNext} />
      </div>
      <div className="dots">
      </div>
    </div>
  )
}

export default Slideshow
