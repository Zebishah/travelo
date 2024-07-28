import { Link } from "react-router-dom";
import "../css/travelo.css";
import image1 from "../images/g-2.jpg";
import image2 from "../images/g-3.jpg";
import image3 from "../images/g-4.jpg";
import image4 from "../images/g-5.jpg";
import image5 from "../images/g-6.jpg";

const Packages = () => {
  return (
    <div>
      <section className="packages" id="packages">
        <div className="pac-head">
          <h1 className="heading2 heading">
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>s</span>
          </h1>
        </div>
        <div className="box-container">
          <div className="box">
            <img src={image1} alt="" />
            <div className="content">
              <h3>
                {" "}
                <i
                  className="fas fa-map-marker-alt"
                  color="orange"
                /> TOKYO{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nam!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <hr />
              <div className="price">
                {" "}
                $90.00 <span id="line">$120.00</span>{" "}
              </div>
              <Link to={"/"} className="btn4">
                Book Now
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={image2} alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt" /> Madrid{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nam!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <hr />
              <div className="price">
                {" "}
                $90.00 <span id="line">$120.00</span>{" "}
              </div>
              <Link to={"/"} className="btn4">
                Book Now
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={image3} alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt" /> Berlin{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nam!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <hr />
              <div className="price">
                {" "}
                $90.00 <span id="line">$120.00</span>{" "}
              </div>
              <Link to={"/"} className="btn4">
                Book Now
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={image4} alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt" /> Sydney{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nam!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <hr />
              <div className="price">
                {" "}
                $90.00 <span id="line">$120.00</span>{" "}
              </div>
              <Link to={"/"} className="btn4">
                Book Now
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={image5} alt="" />
            <div className="content">
              <h3>
                {" "}
                <i className="fas fa-map-marker-alt" /> Thailand{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, nam!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <hr />
              <div className="price">
                {" "}
                $90.00 <span id="line">$120.00</span>{" "}
              </div>
              <Link to={"/"} className="btn4">
                Book Now
              </Link>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
