import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const AuthButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li> {AuthButton}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
