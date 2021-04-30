import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const requireAuth = (ChildComponent) => {
  const RequireAuth = (props) => {
    const auth = useSelector((state) => state.auth);
    switch (auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading...</div>;
      default:
        return <ChildComponent {...props} />;
    }
  };

  return RequireAuth;
};

export default requireAuth;
