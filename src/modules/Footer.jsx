import { Link } from "react-router-dom";
import "../css/travelo.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="upper-footer">
            <div className="boxs box">
              <h3>about us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quas magni pariatur est accusantium voluptas enim nemo
                facilis sit debitis.
              </p>
            </div>
            <div className="box">
              <h3>branch locations</h3>
              <Link to={"/"}>Pakistan</Link>
              <Link to={"/"}>USA</Link>
              <Link to={"/"}>japan</Link>
              <Link to={"/"}>france</Link>
            </div>
            <div className="box">
              <h3>quick links</h3>
              <Link to={"/"}>home</Link>
              <Link to={"/"}>book</Link>
              <Link to={"/"}>packages</Link>
              <Link to={"/"}>services</Link>
              <Link to={"/"}>gallery</Link>
              <Link to={"/"}>review</Link>
              <Link to={"/"}>contact</Link>
            </div>
            <div className="box">
              <h3>follow us</h3>
              <Link to={"/"}>facebook</Link>
              <Link to={"/"}>instagram</Link>
              <Link to={"/"}>twitter</Link>
              <Link to={"/"}>linkedin</Link>
            </div>
          </div>
        </div>
        <h1 className="credit">
          {" "}
          created by <span> mr. web designer </span> | all rights reserved!{" "}
        </h1>
      </section>
    </div>
  );
};

export default Footer;
