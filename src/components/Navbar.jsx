import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModel from "./ContactModel";
import logo from "../assets/images/logo4.png";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <ContactModel />

      <header className="container-fluid web-nav position-fixed top-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            <div className="row w-100 align-items-center">
              <div className="col-sm-2">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="logo" className="logo img-fluid object-fit-fill" />
                </Link>
              </div>
              <div className="col-sm-10">
                <div className="collapse navbar-collapse justify-content-end gap-4 fw-medium">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/services">Services</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <a
                    className="btn btn-orange ms-3 fw-medium"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <header className="container-fluid mobile-nav py-3 px-4 position-fixed top-0">
        <div className="row mobile-header-top">
          <div className="col-6 d-flex align-items-center">
            <button className="navbar-toggler bg-transparent border-0" onClick={toggleMobileNav}>
              <i className="fas fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" className="logo img-fluid object-fit-fill" />
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <a
              className="btn btn-orange get-started-mobile"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>

        <div id="mobileNav" className={showMobileNav ? "show" : ""}>
          <div className="row">
            <div className="col-12">
              <div className="close-btn" onClick={toggleMobileNav}>
                &times;
              </div>
              <ul className="navbar-nav p-5">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={toggleMobileNav}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={toggleMobileNav}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services" onClick={toggleMobileNav}>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" onClick={toggleMobileNav}>Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={toggleMobileNav}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
