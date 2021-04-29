import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1 className="center-align title">Ooooops, route not found!</h1>;
};

export default {
  component: NotFoundPage,
};
