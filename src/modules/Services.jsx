import "../css/travelo.css";
import { FaHotel } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";
const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="ser-head">
          <h1 className="heading">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </h1>
        </div>
        <div className="box-container">
          <div className="box">
            <FaHotel className="fas fa-hotel icon" />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
          <div className="box">
            <FaUtensils className="fas fa-utensils icon" />
            <h3>food and drinks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
          <div className="box">
            <FaBullhorn className="fas fa-bullhorn icon" />
            <h3>safty guide</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
          <div className="box">
            <FaGlobeAsia className="fas fa-globe-asia icon" />
            <h3>around the world</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
          <div className="box">
            <FaPlane className="fas fa-plane icon" />
            <h3>fastest travel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
          <div className="box">
            <FaPersonHiking className="fas fa-hiking icon" />
            <h3>adventures</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore commodi earum, quis voluptate exercitationem ut minima
              itaque iusto ipsum corrupti!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
