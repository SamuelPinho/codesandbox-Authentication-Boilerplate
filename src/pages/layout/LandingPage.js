import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withAuthentication } from "../../components/Session";

const LandingPage = ({ authUser }) => (
  <Fragment>
    <h1 className="title has-text-dark">
      Welcome {authUser ? authUser.email : ""}
    </h1>
    <div className="buttons">
      <Fragment>
        <div className="content">
          <p>
            This is a boilerplate for user authentication using
            <strong> Google Firebase </strong> for storing user information and
            <strong> React </strong> for creating the UI.
          </p>
          <p>
            This was made for beign used as a boilerplate but also to be part of
            a article posted on Medium.
          </p>
          <hr />
          <p>
            <strong>Google: </strong>Firestore and Authentication.
            <br />
            <strong>React: </strong>High-Order-Components and Context.
          </p>
        </div>
      </Fragment>
    </div>
  </Fragment>
);

export default withAuthentication(LandingPage);
