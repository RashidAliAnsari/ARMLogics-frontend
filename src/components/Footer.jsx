import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="container-fluid">
        <div className="container py-3">
          <div className="row align-items-center">

            <div className="col-sm-4 text-center text-sm-start mb-2 mb-sm-0">
              <p className="mb-0">&copy; {year} ARM Logics.</p>
            </div>

            <div className="col-sm-8 p-2">
              <div className="d-flex justify-content-center justify-content-sm-end flex-wrap gap-4 fw-medium">
                <Link className="nav-link p-0" to="/">Home</Link>
                <Link className="nav-link p-0" to="/about">About</Link>
                <Link className="nav-link p-0" to="/services">Services</Link>
                <Link className="nav-link p-0" to="/projects">Projects</Link>
                <Link className="nav-link p-0" to="/contact">Contact</Link>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
