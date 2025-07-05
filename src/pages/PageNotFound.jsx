import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="notfound-btn ">Go Back Home</Link>
      </div>
    </div>
  );
}
