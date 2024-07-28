import { Link, NavLink } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/travelo.css";
const Navbar = () => {
  return (
    <div>
      <div className="nav-r h-[10%] ">
        <div className="log">
          <Link href="#" className="logo">
            <span>T</span>ravelo
          </Link>
        </div>
        <div className="navo">
          <div className="navbar">
            <NavLink to="/" className="nav-ele font-radios">
              Home
            </NavLink>
            <NavLink to="#book" className="nav-ele font-radios">
              Book
            </NavLink>
            <NavLink to="#packages" className="nav-ele font-radios">
              Packages
            </NavLink>
            <NavLink to="#services" className="nav-ele font-radios">
              Services
            </NavLink>
            <NavLink to="#gallery" className="nav-ele font-radios">
              Gallery
            </NavLink>
            <NavLink to="#review" className="nav-ele font-radios">
              Review
            </NavLink>
            <NavLink to="#contact" className="nav-ele font-radios">
              Contact
            </NavLink>
          </div>
          <div className="icons">
            <Link href="Blog.html">
              <LiaBlogSolid className="hover" id="blog-btn" />
            </Link>
            <Link href="login.html">
              <FaUser id="login-btn" />
            </Link>
            <GiHamburgerMenu className="fas fa-bars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
