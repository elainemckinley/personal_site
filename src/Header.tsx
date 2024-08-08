import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="header"
      style={{
        height: "12rem",
      }}
    >
      <div className="header-nav">
        <Link className="header-nav-link" to="/">
          Home
        </Link>
        <Link className="header-nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
