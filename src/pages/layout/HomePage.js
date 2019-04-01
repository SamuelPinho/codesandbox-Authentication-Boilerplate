import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../components/Session";

const HomePage = ({ authUser }) => (
  <Fragment>
    <h1 className="title has-text-dark">
      Welcome {authUser ? authUser.email : ""}
    </h1>
  </Fragment>
);

export default withAuthorization()(HomePage);
