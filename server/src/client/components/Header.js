import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const Header = ({ auth }) => {
  console.log("My auth status is", auth);
  const hookAuth = useSelector((state) => state.auth);
  console.log("hook auth is:", hookAuth);
  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
