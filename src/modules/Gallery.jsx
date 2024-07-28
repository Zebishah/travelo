import { Link } from "react-router-dom";
import "../css/travelo.css";
import image1 from "../images/g-2.jpg";
import image2 from "../images/g-3.jpg";
import image3 from "../images/g-4.jpg";
import image4 from "../images/g-5.jpg";
import image5 from "../images/g-6.jpg";
import image6 from "../images/g-7.jpg";
import image7 from "../images/g-8.jpg";
import image8 from "../images/g-9.jpg";
import image9 from "../images/bg23.jpg";
import image10 from "../images/bg6.jpg";
import image11 from "../images/bg1.png";
import image12 from "../images/bg27.png";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // ScrollReveal
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 10,
    });

    ScrollReveal().reveal(".heading, .box, .box-container", { origin: "top" });

    // Image Slider
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="gallery" id="gallery">
        <div className="gall-head">
          <h1 className="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
          </h1>
        </div>
        <div className="box-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`box ${index === currentSlide ? "active" : ""}`}
            >
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <h3>amazing places</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, tenetur.
                </p>
                <Link to={"/"} className="btn">
                  see more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
