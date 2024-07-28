import "../css/travelo.css";
import image1 from "../images/bg18.jpg";
import image2 from "../images/bg20.jpg";
import image3 from "../images/bg21.jpg";
import image4 from "../images/bg15.jpg";
import { useEffect } from "react";

const Review = () => {
  useEffect(() => {
    // Slider animation
    let slides = document.querySelectorAll(".contentss");
    let a = -1;

    const f = () => {
      a++;
      if (a < slides.length) {
        slides[a].style.marginLeft = `-100%`;
      }
      if (a === slides.length - 1) {
        slides.forEach((slide) => {
          slide.style.marginLeft = "0";
        });
        a = -1;
      }
    };
    const interval = setInterval(f, a <= 3 ? 3000 : 10);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="review" id="review">
        <div className="rev-head">
          <h1 className="heading">
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
          </h1>
        </div>
        <div className="container">
          <div className="slider">
            <div className="contentss">
              <img src={image1} alt="" />
              <h3>hanzala tahir</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <div className="contentss">
              <img src={image2} alt="" />
              <h3>usman tahir</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <div className="contentss">
              <img src={image3} alt="" />
              <h3>ali tahir</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <div className="contentss">
              <img src={image4} alt="" />
              <h3>aman tahir</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci quisquam sunt nesciunt fugiat odit minus illum
                asperiores dolorum enim sint quod ipsam distinctio molestias
                consectetur ducimus beatae, reprehenderit exercitationem!
              </p>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
