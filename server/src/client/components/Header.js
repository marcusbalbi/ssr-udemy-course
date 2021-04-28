import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ auth }) => {
  const hookAuth = useSelector((state) => state.auth);
  console.log("hook auth is:", hookAuth);
  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};

export default Header;
