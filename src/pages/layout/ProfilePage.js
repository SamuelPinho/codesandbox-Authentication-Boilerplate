import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../components/Session";

const ProfilePage = ({ authUser }) => {
  return (
    <Fragment>
      <h1 className="title has-text-dark">My Profile</h1>
      <span>
        <h3 className="subtitle has-text-dark">
          <strong className="has-text-dark">
            {authUser ? authUser.email : ""}
          </strong>
        </h3>
      </span>
      <hr />
      <div className="buttons">
        <Link to={"/change-pass"} className="button is-dark is-outlined">
          Change Password
        </Link>
        <Link to={"/recover-pass"} className="button is-text">
          I forgot my password
        </Link>
      </div>
    </Fragment>
  );
};

export default withAuthorization()(ProfilePage);
