import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError;
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <p>{error && error.data}</p>
      <NavLink to="/">
        {" "}
        <button> Go to Home </button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;
