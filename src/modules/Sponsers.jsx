import "../css/travelo.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";

const Sponsers = () => {
  return (
    <div>
      <section className="sponsers" id="sponsers">
        <h1 className="heading">
          <span>s</span>
          <span>p</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>s</span>
        </h1>
        <div className="container">
          <div className="swiper-wrapper ">
            <div className="stick">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>
          <div className="swiper-wrapper ">
            <div className="stick">
              <img src={image6} alt="" />
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsers;
