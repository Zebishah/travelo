import { Link } from "react-router-dom";

import "../css/travelo.css";
import BookingForm from "./BookingForm";
import Packages from "./Packages";
import Services from "./Services";
import Gallery from "./Gallery";
import Review from "./Review";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Sponsers from "./Sponsers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const LandingPage = () => {
  useEffect(() => {
    // ScrollReveal
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 10,
    });

    ScrollReveal().reveal(".contents", { origin: "top" });
    ScrollReveal().reveal(".images,.stick", { origin: "left" });
    ScrollReveal().reveal(".forms", { origin: "right" });
  }, []);
  return (
    <div className="main ">
      <section className="landpage" id="landpage">
        <div className="contents">
          <h3>ADVENTURE IS WORTHWHILE</h3>
          <p>Discover New Places With Us</p>
          <Link to={"/"} className="navLink">
            Discover More
          </Link>
        </div>
      </section>
      <BookingForm />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Sponsers />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
